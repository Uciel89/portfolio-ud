package com.ucielcorp.backend.services;

import com.ucielcorp.backend.models.Estudio;
import com.ucielcorp.backend.repository.EstudioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudioService implements EstudioServiceImp{

    @Autowired
    EstudioRepository estudioRepository;

    @Override
    public List<Estudio> getEstudio() {
        return estudioRepository.findAll();
    }

    @Override
    public void saveEstudio(Estudio est) {
        estudioRepository.save(est);
    }

    @Override
    public void deleteEstudio(Integer id) {
        estudioRepository.deleteById(id);
    }

    @Override
    public Estudio findEstudio(Integer id) {
        return estudioRepository.findById(id).orElse(null);
    }
}
