import React, { useContext, createContext } from "react";
import "./flexpoint.css";

const Context = createContext({});

const filter = obj => {
  return [
    Object.entries(obj)
      .filter(([k, v]) => v)
      .map(([k, v]) => k)
      .filter(k => !/^on[A-Z]/.test(k))
      .join(" "),
    Object.entries(obj)
      .filter(([k, v]) => /^on[A-Z]/.test(k))
      .reduce((events, [k, v]) => ({ ...events, [k]: v }), {})
  ];
};

export default function Flex({ style = {}, className, children, ...props }) {
  const data = useContext(Context);
  const opts = { gap: 10, ...data, ...props };
  style["--gap"] = typeof opts.gap === "number" ? opts.gap + "px" : opts.gap;

  const [classes, events] = filter({
    [className]: Boolean(className),
    flex: true,
    ...opts
  });
  return (
    <div className={classes} style={style} {...events}>
      <Context.Provider value={{ gap: opts.gap }}>{children}</Context.Provider>
    </div>
  );
}
