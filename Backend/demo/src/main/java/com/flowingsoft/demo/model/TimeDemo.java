package com.flowingsoft.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TimeDemo {

    @Id
    @GeneratedValue
    private long id;
    private String timeDemo;
    private String zoneTime;

    public TimeDemo() {}

    public TimeDemo(String timeDemo, String zoneTime) {
        super();
        this.timeDemo = timeDemo;
        this.zoneTime = zoneTime;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTimeDemo() {
        return timeDemo;
    }

    public void setTimeDemo(String timeDemo) {
        this.timeDemo = timeDemo;
    }

    public String getZoneTime() {
        return zoneTime;
    }

    public void setZoneTime(String zoneTime) {
        this.zoneTime = zoneTime;
    }

    @Override
    public String toString() {
        return "TimeDemo{" +
                "id=" + id +
                ", time='" + timeDemo + '\'' +
                ", zoneTime='" + zoneTime + '\'' +
                '}';
    }
}
