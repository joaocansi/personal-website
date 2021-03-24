import { NextPageContext } from "next";
import Router from "next/router";

function redirect(context: NextPageContext, path: string) {  
  if (context.res) {
    context.res.writeHead(303, { Location: path });
    context.res.end();
  }else {
    Router.replace(path);
  }
} 

export default redirect;