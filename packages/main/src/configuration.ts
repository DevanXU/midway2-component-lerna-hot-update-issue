import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as book from 'midway-custom-component';

@Configuration({
  imports: [
    book
  ],
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
  }
}
