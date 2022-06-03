package com.ucielcorp.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Persona {


    // Primary Key
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id_Persona;

    // Columnas
    @NotNull
    private String nombre;

    @NotNull
    private String apellido;

    @NotNull
    private String domicilio;

    @NotNull
    private String email;

    @NotNull
    private String celular;

    @Column(length = 1000)
    @NotNull
    private String sobre_mi;

    @NotNull
    private String url_perfil;

    // Relaciones
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn( name = "ip_persona", referencedColumnName = "id_Persona")
    List<Habilidad> habilidad = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_persona", referencedColumnName = "id_Persona")
    List<Experiencia> experiencias = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_persona", referencedColumnName = "id_Persona")
    List<Estudio> estudios = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_persona", referencedColumnName = "id_Persona")
    List<Demo> demos = new ArrayList<>();


    // Constructores

    public Persona() {}

    public Persona(String nombre, String apellido, String domicilio, String email, String celular, String sobre_mi, String url_img) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.email = email; // Relaciones
        this.celular = celular;
        this.sobre_mi = sobre_mi;
        this.url_perfil = url_img;
    }

    public Persona(List<Habilidad> habilidad){
        this.habilidad = habilidad;
    }

    // Getter and Setter

    public int getId(){
        return id_Persona;
    }

    public void setId(int id){
        this.id_Persona = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getSobre_mi() {
        return sobre_mi;
    }

    public void setSobre_mi(String sobre_mi) {
        this.sobre_mi = sobre_mi;
    }

    public String getUrl_img() {
        return url_perfil;
    }

    public void setUrl_img(String url_img) {
        this.url_perfil = url_img;
    }

    // Getter and Setter de las relaciones

    public List<Habilidad> getHabilidad() {
        return habilidad;
    }

    public void setHabilidad(List<Habilidad> habilidad) {
        this.habilidad = habilidad;
    }

    public List<Experiencia> getExperiencias() {
        return experiencias;
    }

    public void setExperiencias(List<Experiencia> experiencias) {
        this.experiencias = experiencias;
    }

    public List<Estudio> getEstudios() {
        return estudios;
    }

    public void setEstudios(List<Estudio> estudios) {
        this.estudios = estudios;
    }

    public List<Demo> getDemos() {
        return demos;
    }

    public void setDemos(List<Demo> demos) {
        this.demos = demos;
    }
}
