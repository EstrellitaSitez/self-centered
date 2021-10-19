import React from 'react'
import { Tooltip } from 'antd';



export default function TarotQuestionPopOver() {

    const toolTipContent = (
        <div>
            Example Questions:
            <ol >
                <li>
                    What can I do to get closer to xyz goal?
                </li>
                <li>
                    How can I strengthen my relationship with xyz?
                </li>
                <li>
                    In what ways am I self-sabotaging?
                </li>
            </ol>
        </div>
    )

    return (
      <Tooltip
      color='yellow'
      autoAdjustOverflow
      title={toolTipContent}
      overlayInnerStyle={{color:'black'}}
      >

           <p style={{
               color:'whitesmoke',
               display: 'inline',
               cursor: 'pointer'}} type="text"> Begin by asking yourself a question. </p>
      </Tooltip>
    );
  
}