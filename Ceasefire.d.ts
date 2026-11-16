import Declaration from '@civ-clone/core-diplomacy/Declaration';
/**
 * A truce between two players at war: neither attacks the other, but there's no peace yet. It has no timer of its own
 *  (an `Expiry` can give it one); a rule set ends it when its rules say it lapses.
 */
export declare class Ceasefire extends Declaration {}
export default Ceasefire;
