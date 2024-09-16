import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import Filters from './Filters';
import { getSampleJdJSON } from '../data';
import './style.css';

const JobList = () => {
  const initialItemCount = 12;
  const itemsPerLoad = 12;

  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    minExperience: 1,
    companyName: '',
    location: '',
    role: ''
  });

  useEffect(() => {
    setJobs(getSampleJdJSON());
  }, []);

  useEffect(() => {
    setVisibleJobs(jobs.slice(0, initialItemCount));
  }, [jobs, initialItemCount]);

  const handleScroll = () => {

    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ||
      isLoading
    ) return;
    setIsLoading(true);
    setTimeout(() => {
      const remainingJobs = jobs.slice(
        visibleJobs.length,
        visibleJobs.length + itemsPerLoad
      );
      setVisibleJobs(prevVisibleJobs => [...prevVisibleJobs, ...remainingJobs]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleJobs, isLoading]);

  useEffect(() => {
    filterJobs();
  }, [filters, jobs]);

  const filterJobs = () => {
    let filteredJobs = jobs.filter(job => {
      const { minExperience, companyName, location, role } = filters;
      return (
        job.minExp >= minExperience &&
        job.companyName.toLowerCase().includes(companyName.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.jobRole.toLowerCase().includes(role.toLowerCase())
      );
    });
    setVisibleJobs(filteredJobs.slice(0, initialItemCount));
  };

  return (
    <div className="job-list">
      <Filters setFilters={setFilters} filters={filters} />
      <div className="list">
        {visibleJobs.map((job, index) => (
          <JobCard key={job.jdUid} job={job} index={index + 1} />
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default JobList;
