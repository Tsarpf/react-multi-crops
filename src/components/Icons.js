import React from 'react'
import Protypes from 'prop-types'


export const DeleteIcon = props => (
  <div
    className="rmc-icon-container"
    {...props}
  >
    <div className="rmc-remove" />
    <style jsx>{`
      .rmc-icon-container {
        width: 6px;
        height: 6px;
        cursor: pointer;
        float: right;
        background:#262626;
        opacity: 0.8;
      }
      .rmc-remove {
        color: white;
        position: absolute;
        margin-top: 2px;
      }

      .rmc-remove:hover {
        cursor: pointer;
      }

      .rmc-remove:before {
        content: '';
        position: absolute;
        width: 6px;
        height: 1px;
        background-color: currentColor;
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
      }

      .rmc-remove:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 1px;
        background-color: currentColor;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
      }
    `}
    </style>
  </div>

)

export const NumberIcon = ({ number }) => (
  <div className="rmc-number">
    { number }
    <style jsx>{`
      .rmc-number {
        width: 6px;
        height: 6px;
        float: left;
        font-size: 4px;
        background:#262626;
        text-align: center;
        line-height: 6px;
        color: white;
        opacity: 0.8;
      }
    `}
    </style>
  </div>
)

const { number } = Protypes

NumberIcon.propTypes = {
  number,
}

NumberIcon.defaultProps = {
  number: '',
}

