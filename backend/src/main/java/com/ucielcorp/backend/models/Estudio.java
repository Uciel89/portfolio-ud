package com.ucielcorp.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Estudio {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id_Estudio;

    // Columnas

    private String sobre_estudios;

    @NotNull
    private String nombre_estudio;

    @Column(nullable = false, length = 300)
    private String descripcion_estudio;

    @NotNull
    private String url_estudio;

    // Getter and Setter

    public int getId() {
        return id_Estudio;
    }

    public void setId(int id) {
        this.id_Estudio = id;
    }

    public String getSobre_estudio() {
        return sobre_estudios;
    }

    public void setSobre_estudio(String sobre_estudio) {
        this.sobre_estudios = sobre_estudio;
    }

    public String getNombre() {
        return nombre_estudio;
    }

    public void setNombre(String nombre) {
        this.nombre_estudio = nombre;
    }

    public String getDescripcion() {
        return descripcion_estudio;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion_estudio = descripcion;
    }

    public String getUrl_foto() {
        return url_estudio;
    }

    public void setUrl_foto(String url_foto) {
        this.url_estudio = url_foto;
    }

}
