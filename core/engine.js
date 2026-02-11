engine.tick({ dayEnd: true })
import { evaluateChassis } from "./core/chassis.js";
import { evaluateFernanda } from "./core/fernanda.js";
import { evaluateModes } from "./core/modes.js";
import { updateAttributes } from "./core/attributes.js";
import { logDecision } from "./decision/decision.js";

const athlete = {
  mode: "KIPTUM",
  fatigue: 0,
  sleepDebt: 0,
  chassisTier: 1,
  attributes: {},
  history: []
};

export const engine = {
  tick({ dayEnd = false } = {}) {
    if (!dayEnd) return;

    logDecision("ENGINE", "Day end evaluation started");

    evaluateChassis(athlete);
    evaluateFernanda(athlete);
    evaluateModes(athlete);
    updateAttributes(athlete);

    logDecision("ENGINE", "Day end evaluation completed");
  },

  getState() {
    return athlete;
  }
};
