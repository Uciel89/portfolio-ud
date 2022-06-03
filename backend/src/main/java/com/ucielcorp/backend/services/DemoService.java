package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Demo;
import com.ucielcorp.backend.repository.DemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemoService implements DemoServiceImp{

    @Autowired
    DemoRepository demoRepository;

    @Override
    public List<Demo> getDemo() {
        return demoRepository.findAll();
    }

    @Override
    public void saveDemo(Demo demo) {
        demoRepository.save(demo);
    }

    @Override
    public void deleteDemo(Integer id) {
        demoRepository.deleteById(id);
    }

    @Override
    public Demo findDemo(Integer id) {
        return demoRepository.findById(id).orElse(null);
    }
}
