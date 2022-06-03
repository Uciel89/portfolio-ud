package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Habilidad;
import com.ucielcorp.backend.repository.HabilidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabilidadService implements HabilidadServiceImp{

    @Autowired
    HabilidadRepository habilidadRepository;

    @Override
    public List<Habilidad> getHabilidad() {
        return habilidadRepository.findAll();
    }

    @Override
    public void saveHabilidad(Habilidad habilidad) {
        habilidadRepository.save(habilidad);
    }

    @Override
    public void deleteHabilidad(Integer id) {
        habilidadRepository.deleteById(id);

    }

    @Override
    public Habilidad findHabilidad(Integer id) {
        return habilidadRepository.findById(id).orElse(null);
    }
}
