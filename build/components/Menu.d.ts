import React from "react";
import { WithStyles, Theme } from "@material-ui/core";
import { DateRange, DefinedRange, Setter, NavigationAction } from "../types";
declare const styles: (theme: Theme) => Record<"header" | "container" | "divider" | "headerMobile" | "headerItem" | "calendar", import("@material-ui/core/styles/withStyles").CSSProperties>;
interface MenuProps extends WithStyles<typeof styles> {
    dateRange: DateRange;
    ranges: DefinedRange[];
    mobile: boolean;
    minDate: Date;
    maxDate: Date;
    firstMonth: Date;
    secondMonth: Date;
    setFirstMonth: Setter<Date>;
    setSecondMonth: Setter<Date>;
    setDateRange: Setter<DateRange>;
    helpers: {
        inHoverRange: (day: Date) => boolean;
    };
    handlers: {
        onDayClick: (day: Date) => void;
        onDayHover: (day: Date) => void;
        onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
    };
}
declare const _default: React.ComponentType<Pick<React.PropsWithChildren<MenuProps>, "children" | "dateRange" | "minDate" | "maxDate" | "helpers" | "handlers" | "ranges" | "mobile" | "firstMonth" | "secondMonth" | "setFirstMonth" | "setSecondMonth" | "setDateRange"> & import("@material-ui/core").StyledComponentProps<"header" | "container" | "divider" | "headerMobile" | "headerItem" | "calendar">>;
export default _default;
