
import * as React from 'react';
import {  ITextFieldStyleProps, ITextFieldStyles, TextField } from '@fluentui/react';

const textFieldStyle = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => ({
  ...(
      props.focused ? {
      fieldGroup: {
          border: "none",
          selectors: {
              ":after": {
                  border: "none"
              }
          }
      },
      field: {
          border: "1px solid rgb(102, 102, 102)",
          fontFamily: "SegoeUI,'Segoe UI'",
      }
  }: {
      fieldGroup: {
          border: "none",
          selectors: {
              ":after": {
                  border: "none"
              },
              ":hover": {
                  border: "1px solid rgb(102, 102, 102)"
              }
          }
      },
      field: {
          fontWeight: 600,
          fontFamily: "SegoeUI,'Segoe UI'",
          selectors: {
              ":hover": {
                  fontWeight: 400
              }
          }
      }
  })
});


const TextBoxOldLook = ():JSX.Element => {

    return (
        <TextField value='OLD LOOK! FluentUI 8 PCF' styles={textFieldStyle}/>
      );
}
export default TextBoxOldLook;