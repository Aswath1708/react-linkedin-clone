import JobSeekerGuidance from "../jobs/JobSeekerGuidance";
import Options from "../jobs/Options";
import SearchFilter from "../jobs/SearchFilter";

export const Jobs = () => {
  return (<div style={{
    display:"flex",
    gap:"1.5rem",
    alignItems:"start",
    justifyContent:"center"
  }}>
    <Options/>
    <SearchFilter/>
    <JobSeekerGuidance/>
  </div>);
};
