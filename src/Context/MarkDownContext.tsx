import { createContext, useState, useContext, ChangeEvent, KeyboardEvent, ReactNode } from "react";

export interface MarkDownContextProps {
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyUp: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

const MarkDownContext = createContext<MarkDownContextProps | undefined>(undefined);

export const MarkDownProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setInputValue((prevValue) => `${prevValue}\n\n`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd, value } = e.currentTarget;
      const newValue =
        value.substring(0, selectionStart) +
        "\t" +
        value.substring(selectionEnd);
      setInputValue(newValue);
    }
  };

  return (
    <MarkDownContext.Provider
      value={{
        inputValue,
        handleInputChange,
        handleKeyUp,
        handleKeyDown
      }}
    >
      {children}
    </MarkDownContext.Provider>
  );
};

export const useMarkDownContext = () => useContext(MarkDownContext);

export default MarkDownContext;
