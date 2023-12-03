import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChange event when upvoted', () => {
    let totalVotes: number = 0;
    component.voteChanged.subscribe((tv: number) => totalVotes = tv);

    component.upVote();

    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});