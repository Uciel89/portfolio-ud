package com.ucielcorp.backend.security.models;

import com.sun.istack.NotNull;
import com.ucielcorp.backend.security.enums.RolNombre;

import javax.persistence.*;

@Entity
public class Rol {

    /**===/ Columnas para la Tabla Rol /===**/
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Enumerated(EnumType.STRING)
    private RolNombre rolNombre;

    /**===/ Constructores /===**/
    public Rol(){}

    public Rol(@NotNull RolNombre rolNombre) {
        this.rolNombre = rolNombre;
    }

    /**===/ Getters y Setters /===**/
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RolNombre getRolNombre() {
        return rolNombre;
    }

    public void setRolNombre(RolNombre rolNombre) {
        this.rolNombre = rolNombre;
    }
}
