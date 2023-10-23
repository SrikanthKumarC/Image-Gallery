import * as Popover from "@radix-ui/react-popover";

const PopoverCustom = ({ children }) => <Popover.Root>{children}</Popover.Root>;

const PopoverContent = ({ children }) => (
  <>
    <Popover.Portal>
      <Popover.Content>{children}</Popover.Content>
    </Popover.Portal>
  </>
);

PopoverCustom.Trigger = Popover.Trigger;
PopoverCustom.Content = PopoverContent;
PopoverCustom.Anchor = Popover.Anchor;
export default PopoverCustom;
