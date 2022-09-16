import { inject, injectable } from 'inversify';
import {
  CameraComponentFactory,
  MapComponentFactory,
  ObjectComponentFactory,
  UserComponentFactory,
} from '@ioc/interfaces';
import { JsonObject } from '@game/interfaces';
import {
  CameraComponent,
  MapComponent,
  ObjectComponent,
  UserComponent,
} from '@game/components';
import {
  CAMERA_COMPONENT_FACTORY_KEY,
  MAP_COMPONENT_FACTORY_KEY,
  OBJECT_COMPONENT_FACTORY_KEY,
  USER_COMPONENT_FACTORY_KEY,
} from '@game/constants';
import { Canvas } from './canvas.object';

@injectable()
export class EntryRpgVoiceClient {
  private _userComponents: UserComponent[] = [];
  private _objectComponents: ObjectComponent[] = [];
  private _localUser: UserComponent;
  private readonly _map: MapComponent;
  private readonly _camera: CameraComponent;

  constructor(
    @inject(USER_COMPONENT_FACTORY_KEY)
    private readonly _userComponentFactory: UserComponentFactory,
    @inject(MAP_COMPONENT_FACTORY_KEY)
    private readonly _mapComponentFactory: MapComponentFactory,
    @inject(OBJECT_COMPONENT_FACTORY_KEY)
    private readonly _objectComponentFactory: ObjectComponentFactory,
    @inject(CAMERA_COMPONENT_FACTORY_KEY)
    private readonly _cameraComponentFactory: CameraComponentFactory,
    private readonly _canvas: Canvas
  ) {
    this.spawnLocalUser(
      this._userComponentFactory('#ff0000', { x: 100, y: 100 })
    );
    this._camera = this._cameraComponentFactory(this._localUser.position);
    this._objectComponents = this.fetchMapObjects();
    this._map = this._mapComponentFactory();
    this.initListeners();
    this.gameLoop(0);
  }

  public spawnLocalUser(user: UserComponent): void {
    this._localUser = user;
    this.spawnUser(user);
  }
  public spawnUser(user: UserComponent): void {
    this._userComponents.push(user);
  }
  // eslint-disable-next-line
  private gameLoop(timestamp: number): void {
    window.requestAnimationFrame((time) => {
      this.gameLoopFrameAction();
      this.gameLoop(time);
    });
  }
  private fetchMapObjects(): ObjectComponent[] {
    const jsonObjects: JsonObject[] = [
      {
        asset: '#ccdcdc',
        position: { rotate: 0, x: 20, y: 60 },
        size: { height: 20, width: 70 },
      },
      {
        asset: '#c22cdc',
        position: { rotate: 0, x: 1200, y: 700 },
        size: { height: 5, width: 60 },
      },
    ];
    return jsonObjects.map(({ position, size, asset }) =>
      this._objectComponentFactory(position, size, asset, this._camera.position)
    );
  }
  private gameLoopFrameAction(): void {
    this._canvas.clear();
    this._map.frameAction();
    this._userComponents.forEach((user) => user.frameAction());
    this._objectComponents.forEach((object) =>
      object.frameAction(this._camera.position)
    );
    this._camera.frameAction();
  }
  private initListeners(): void {
    window.addEventListener('mouseup', ({ x, y }) => {
      this._localUser.move({
        x: x,
        y: y,
      });
    });
  }
}
