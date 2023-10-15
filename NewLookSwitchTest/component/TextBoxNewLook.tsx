import * as React from "react";
import {
  FluentProvider,
  useId,
  webLightTheme,
  Input
} from "@fluentui/react-components";


const TextBoxNewLook = ():JSX.Element => {

  const inputId = useId("input");
  return (
    <FluentProvider theme={webLightTheme}> 
      <Input appearance={'filled-darker'} id={inputId} value="NEW LOOK! FluentUI 9 PCF"/>
    </FluentProvider>
  );
}
export default TextBoxNewLook;