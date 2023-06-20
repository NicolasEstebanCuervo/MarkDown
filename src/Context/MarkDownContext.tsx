import { createContext, useState, useContext, ChangeEvent, ReactNode } from "react";

export interface MarkDownContextProps {
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const MarkDownContext = createContext<MarkDownContextProps | undefined>(
  undefined
);

export const MarkDownProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {  
    setInputValue(e.target.value);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
        handleKeyDown
      }}
    >
      {children}
    </MarkDownContext.Provider>
  );
};

export const useMarkDownContext = () => useContext(MarkDownContext);

export default MarkDownContext;