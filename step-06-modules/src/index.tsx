import React = require("react");
import { ReactNode } from "react";
import * as Styles from './index.css' ;

export class TestComponent extends React.Component<{},{}>{
    render(): ReactNode{
        return(
            <div className={Styles.test} />
        );
    }
}