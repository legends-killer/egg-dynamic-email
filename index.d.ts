/*
 * @Author: legends-killer
 * @Date: 2021-11-29 01:47:33
 * @LastEditors: legends-killer
 * @LastEditTime: 2021-11-29 02:50:24
 * @Description:
 */
import "egg";
import { Application } from "egg";

interface IReturnData {
  code: number;
  msg: string;
}

interface Iattachment {
  data?: string;
  alternative?: boolean;
  path?: string;
  type?: string;
  name?: string;
}

declare module "egg" {
  interface EggAppConfig {
    email: {
      host: string;
      password: string;
      sender: string;
      username: string;
    };
  }

  interface Application {
    email: {
      sendEmail: (
        title: string,
        info: string,
        reciver: string,
        attachment?: Array<Iattachment>
      ) => Promise<IReturnData>;
    };
  }
}
