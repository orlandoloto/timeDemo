package com.flowingsoft.demo.controller;


import com.flowingsoft.demo.model.TimeDemo;
import com.flowingsoft.demo.repository.RepositoryTimeDemo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/times")
public class TimeDemoController {
    @Autowired
    private RepositoryTimeDemo repoTimeDemo;

    private List<TimeDemo> listTimes = new ArrayList<>();

    @GetMapping
    public List<TimeDemo> getTimes(){
        //return this.repoTimeDemo.findAll();
        return getListTimes();
    }

    @PostMapping
    public TimeDemo createTimeDemo(@RequestBody TimeDemo timeDemo){
        listTimes.add(timeDemo);
        return this.repoTimeDemo.save(timeDemo);
    }

    private void manyTimes() {
        listTimes.add(new TimeDemo("18:40", "UTC-3"));
        listTimes.add(new TimeDemo("18:41", "UTC-4"));
        listTimes.add(new TimeDemo("18:42", "UTC-5"));
        listTimes.add(new TimeDemo("18:43", "UTC-3"));
    }

    private List<TimeDemo> getListTimes() {
        return listTimes;
    }

}
