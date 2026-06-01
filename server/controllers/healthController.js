// @desc    Health check
// @route   GET /health
export const getHealth = (_req, res) => {
  res.json({ ok: true });
};
