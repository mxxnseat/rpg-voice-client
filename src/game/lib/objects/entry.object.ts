import { inject, injectable } from 'inversify';
import { UserComponentFactory } from '@ioc/interfaces';
import { UserComponent } from '@game/components';
import { UserComponentFactoryKey } from '@game/constants';

@injectable()
export class EntryRpgVoiceClient {
  private _users: UserComponent[] = [];
  private _localUser: UserComponent;

  constructor(
    @inject(UserComponentFactoryKey)
    private readonly _userFactory: UserComponentFactory
  ) {
    this.spawnLocalUser(this._userFactory('#ff0000', { x: 100, y: 100 }));
    this.initListeners();
    this.gameLoop(0);
  }

  public spawnLocalUser(user: UserComponent): void {
    this._localUser = user;
    this.spawnUser(user);
  }
  public spawnUser(user: UserComponent): void {
    this._users.push(user);
  }
  // eslint-disable-next-line
  private gameLoop(timestamp: number): void {
    window.requestAnimationFrame((time) => {
      this.gameLoopFrameAction();
      this.gameLoop(time);
    });
  }
  private gameLoopFrameAction(): void {
    this._users.forEach((user) => user.frameAction());
  }
  private initListeners(): void {
    window.addEventListener('mouseup', ({ x, y }) => {
      this._localUser.move({ x, y });
    });
  }
}
