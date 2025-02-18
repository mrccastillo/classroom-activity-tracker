import { useState, useContext, createContext, useEffect } from "react";

const StudentProfileContext = createContext(null);

export const StudentProfileProvider = ({ children }) => {
  const [studentProfile, setStudentProfile] = useState(null);
  const [section, setSection] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("studentProfile");
    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      setStudentProfile(profile);
      setSection(profile.section);
    } else {
      console.log("No profile found in localStorage.");
    }
  }, []);

  const updateStudentProfile = (profile) => {
    console.log("Updating profile:", profile);
    setStudentProfile(profile);
    setSection(profile.section);
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    console.log("Saved profile to localStorage:", profile);
  };

  return (
    <StudentProfileContext.Provider
      value={{ studentProfile, section, updateStudentProfile }}
    >
      {children}
    </StudentProfileContext.Provider>
  );
};

export const useStudentProfile = () => {
  return useContext(StudentProfileContext);
};
