import { describe, it, expect, vi } from 'vitest';
import { withPaymentGating, type X402PaymentMiddleware } from './middleware.js';

function fakeMiddleware(settled: boolean, error?: string) {
  return {
    checkToolCall: vi.fn().mockResolvedValue({ allowed: true, paymentVerified: true, settlementPending: true }),
    settleAfterExecution: vi.fn().mockResolvedValue({ settled, error }),
  } as unknown as X402PaymentMiddleware;
}

describe('withPaymentGating settlement ordering', () => {
  it('withholds the tool output when settlement fails', async () => {
    const gated = withPaymentGating(fakeMiddleware(false, 'facilitator down'), 'paid_tool', async () => 'secret result');
    await expect(gated({}, { 'x-payment': 'abc' })).rejects.toThrow(/settlement failed/i);
  });

  it('returns the tool output once settlement completes', async () => {
    const gated = withPaymentGating(fakeMiddleware(true), 'paid_tool', async () => 'secret result');
    await expect(gated({}, { 'x-payment': 'abc' })).resolves.toBe('secret result');
  });
});
