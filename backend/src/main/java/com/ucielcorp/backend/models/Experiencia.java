package com.ucielcorp.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Experiencia {

    // Primary Key
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id_Experiencia;

    // Columnas

    @NotNull
    private String nombre_experiencia;

    @NotNull
    private String trabajo;

    @NotNull
    private String descripcion_experiencia;

    @NotNull
    private String fecha_inicio;

    private String fecha_final;

    // Métodos Getter and Setter

    public int getId() {
        return id_Experiencia;
    }

    public void setId(int id) {
        this.id_Experiencia = id;
    }

    public String getNombre() {
        return nombre_experiencia;
    }

    public void setNombre(String nombre) {
        this.nombre_experiencia = nombre;
    }

    public String getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public String getFecha_final() {
        return fecha_final;
    }

    public void setFecha_final(String fecha_final) {
        this.fecha_final = fecha_final;
    }

    public String getDescripcion() {
        return descripcion_experiencia;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion_experiencia = descripcion;
    }

    public String getTrabajo() {
        return trabajo;
    }

    public void setTrabajo(String trabajo) {
        this.trabajo = trabajo;
    }

}
