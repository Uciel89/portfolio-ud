package com.ucielcorp.backend.security.jwt;

// Se va a ejecutar por cada petición de acceso
// Va a comprobar que sea válido el token para acceder a la app. La validez la realiza mediante el
// JwtProvider.

import com.ucielcorp.backend.security.services.UserDetailsServiceImp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Si es valido, nos deja entras, si no manda una exception
public class JwtTokenFilter extends OncePerRequestFilter {

    private final static Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    UserDetailsServiceImp userDetailsServiceImp;

    // Este método se ejecuta cada vez que un usuario trate autenticarse en nuestra app
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain filterChain) throws ServletException, IOException {
        // Este metodo nos devuelve si el usuario esta autenticado y comprobar si el token es valido
        try {
            String token = getToken(req);
            if (token != null && jwtProvider.validateToken(token)){
                String nombreUsuario = jwtProvider.getNombreUsuarioFromToken(token);

                // Obtenemos el nombre de usuario del Token
                UserDetails userDetails = userDetailsServiceImp.loadUserByUsername(nombreUsuario);

                // Obtenemos los permisos que tiene justamente el usuario que quiere ingresar
                // En otras palabras la autorización a la que puede acceder
                UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

                // Al contexto de autenticación que estamos evaluando, le mandamos el usuario que estamos verificando
                SecurityContextHolder.getContext().setAuthentication(auth);
            }

        }catch (Exception e){
            logger.error("Erro en el método doFilter" + e);
        }
        filterChain.doFilter(req, res);
    }

    // Método para obtener el token
    private String getToken(HttpServletRequest request){

        // Extraemos el header del Token
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer"))
            return header.replace("Bearer ", "");
        return null;
    }
}
