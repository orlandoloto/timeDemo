package com.flowingsoft.demo.repository;


import com.flowingsoft.demo.model.TimeDemo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryTimeDemo extends JpaRepository<TimeDemo, Long> {
}
