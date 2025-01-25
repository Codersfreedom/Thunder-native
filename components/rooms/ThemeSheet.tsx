import React from "react";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "../ui/actionsheet";

const ThemeSheet = ({
  showActionsheet,
  handleClose,
}: {
  showActionsheet: boolean;
  handleClose: () => void;
}) => {
  return (
    <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent className="dark:bg-dark-background">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem
          onPress={handleClose}
          className="data-[]:focus:bg-gray-300/40 hover:bg-hover-background rounded-2xl"
        >
          <ActionsheetItemText>Light</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem
          onPress={handleClose}
          className="data-[]:focus:bg-gray-300/40 hover:bg-hover-background rounded-2xl"
        >
          <ActionsheetItemText>Dark</ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default ThemeSheet;
