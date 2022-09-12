import './game/static/scss/index.scss';
import 'reflect-metadata';
import { EntryRpgVoiceClient } from '@game/lib/objects';
import { container } from './ioc/inversify.config';

function boot() {
  container.get(EntryRpgVoiceClient);
}

boot();
