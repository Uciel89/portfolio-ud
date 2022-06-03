package com.ucielcorp.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Demo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id_Demo;

    @NotNull
    private String nombre_demo;

    @NotNull
    private String descripcion_demo;

    @NotNull
    private String url_demo;

    // Getter and Setter

    public int getId() {
        return id_Demo;
    }

    public void setId(int id) {
        this.id_Demo = id;
    }

    public String getNombre() {
        return nombre_demo;
    }

    public void setNombre(String nombre) {
        this.nombre_demo = nombre;
    }

    public String getDescripcion() {
        return descripcion_demo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion_demo = descripcion;
    }

    public String getUrl_demo() {
        return url_demo;
    }

    public void setUrl_demo(String url_demo) {
        this.url_demo = url_demo;
    }

}
