import React from 'react';
import s from "./index.module.less"

export default function MouseIcon() {
    return (
        <div className={s.mouse}>
            <div className={s.mouse__wheel}/>
        </div>
    )
}
