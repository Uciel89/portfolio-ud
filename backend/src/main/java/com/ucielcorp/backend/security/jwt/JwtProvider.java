package com.ucielcorp.backend.security.jwt;

// Genera el token y contiene un método de validación, para verificar la construcción del token

import com.ucielcorp.backend.security.models.UserPrincipal;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtProvider {

    private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    // Asigmnamos los valores que tenemos definidos en el application.properties
    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    /**===/ Métodos para crear y validar el token /===**/
    public String generateToken(Authentication authentication){

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        // Construimos el token
        return Jwts.builder().setSubject(userPrincipal.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    // Método para Obtenemos el usuario
    public String getNombreUsuarioFromToken(String token){
        return Jwts.parser().setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Método para validar el token
    public boolean validateToken(String token){
        try {

            // Verificamos si la fima y el token son correctos
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;

        }catch (MalformedJwtException e){
            logger.error("Token mal formado");
        }catch (UnsupportedJwtException e){
            logger.error("Token no soportado");
        }catch (ExpiredJwtException e){
            logger.error("Token expirado");
        }catch (IllegalArgumentException e){
            logger.error("Token vacío");
        }catch (SignatureException e){
            logger.error("Fallo en la firma");
        }
        return false;
    }

}
