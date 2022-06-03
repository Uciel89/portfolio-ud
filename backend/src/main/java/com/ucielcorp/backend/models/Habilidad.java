package com.ucielcorp.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Habilidad {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id_Habilidad;

    @NotNull
    private String nombre_habilidad;

    @NotNull
    private String porcentaje;

    @NotNull
    private String url_habilidad;

// Constructores

    public Habilidad() {}

    public Habilidad(String nombre, String url_logo) {
        this.nombre_habilidad = nombre;
        this.url_habilidad = url_logo;
    }

    public int getId() {
        return id_Habilidad;
    }

    public void setId(int id) {
        this.id_Habilidad = id;
    }

    public String getNombre() {
        return nombre_habilidad;
    }

    public void setNombre(String nombre) {
        this.nombre_habilidad = nombre;
    }

    public String getUrl_logo() {
        return url_habilidad;
    }

    public void setUrl_logo(String url_logo) {
        this.url_habilidad = url_logo;
    }

    public String getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(String porcentaje) {
        this.porcentaje = porcentaje;
    }
}
