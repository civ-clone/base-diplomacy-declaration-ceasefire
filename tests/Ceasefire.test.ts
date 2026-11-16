import Ceasefire from '../Ceasefire';
import Declaration from '@civ-clone/core-diplomacy/Declaration';
import Never from '@civ-clone/core-diplomacy/Expiries/Never';
import Peace from '@civ-clone/base-diplomacy-declaration-peace/Peace';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { expect } from 'chai';

describe('Ceasefire', (): void => {
  const setUp = () => {
    const ruleRegistry = new RuleRegistry(),
      a = new Player(ruleRegistry),
      b = new Player(ruleRegistry),
      ceasefire = new Ceasefire(a, b, new Never(), ruleRegistry);

    return { a, b, ceasefire };
  };

  it('is a declaration between the two players, and not a peace', (): void => {
    const { a, b, ceasefire } = setUp();

    expect(ceasefire).instanceof(Declaration);
    expect(ceasefire).not.instanceof(Peace);
    expect(ceasefire.isBetween(a, b)).true;
  });

  it('is in force until it is ended', (): void => {
    const { a, ceasefire } = setUp();

    expect(ceasefire.active()).true;

    ceasefire.expire(a);

    expect(ceasefire.active()).false;
    expect(ceasefire.expired()).true;
  });
});
