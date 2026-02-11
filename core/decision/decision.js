export function createDecision({
  agent,              // 'Fernanda' | 'Charlie' | 'John' | 'Superagent'
  severity,           // 'INFO' | 'SOFT' | 'HARD'
  action,             // short summary of what is being done
  reason,             // explanation
  affected = [],      // e.g. ['volume', 'mode', 'sleep']
  confidence = null,  // 0–1 (optional)
  reversible = true,
  expiresAt = null,
  metadata = {}
}) {
  return {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    agent,
    severity,
    action,
    reason,
    affected,
    confidence,
    reversible,
    expiresAt,
    metadata
  }
}
