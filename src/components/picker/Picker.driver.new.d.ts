import { ComponentProps } from '../../testkit/new/Component.driver';
export declare const PickerDriver: (props: ComponentProps, useDialog: boolean) => {
    exists: () => boolean;
    getValue: () => string | undefined;
    open: () => void;
    cancel: () => void;
    done: () => void;
    isOpen: () => boolean;
    dismissDialog: () => void;
    selectItem: (testID: string) => void;
};
