import JobSeekerGuidance from "../jobs/JobSeekerGuidance";
import Options from "../jobs/Options";
import SearchFilter from "../jobs/SearchFilter";
import RecommendedJobs from '../jobs/RecommendedJobs';

export const Jobs = () => {
  return (<div style={{
    display:"flex",
    gap:"1.5rem",
    alignItems:"start",
    justifyContent:"center",
    margin:"0 10%"
  }}>
    <Options/>
    <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
    <SearchFilter/>
    <RecommendedJobs/>
    </div>
    <JobSeekerGuidance/>
  </div>);
};
