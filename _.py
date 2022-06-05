import math

# Lanzamiento Vertical hacia abajo

class Lanzamiento_Vertical_Abajo(object):

    def __init__(self, vf=0, vo=0, g=0, t=0, y=0):
        self.vf = vf  # Velocidad Final
        self.vo = vo  # Velocidad Inicial
        self.g = g  # Gravedad
        self.t = t  # Tiempo transcurrido
        self.y = y  # Rapidez

    def velocidad_final(self):
        return self.vo + (self.g * self.t)

    def velocidad_final_cuadrado(self):
        return math.sqrt((self.vo**2) + (2 * self.g * self.y))

    def rapidez(self):
        return (self.vo * self.t) + (1/2 * self.g * self.t**2)


"""
problema_1 = Lanzamiento_Vertical(vo = 3, g = 10, y = 6)
problema_1.vf = problema_1.velocidad_final_cuadrado()
print(problema_1.vf)  # Correcto
"""
ejemplo_1_a = Lanzamiento_Vertical_Abajo(vo=30.5, g=9.8, t=3)
print(ejemplo_1_a.velocidad_final(),ejemplo_1_a.velocidad_final_cuadrado(), ejemplo_1_a.rapidez())  # Correcto

ejemplo_1_b = Lanzamiento_Vertical_Abajo(vo=30.5, g=9.8, t=10)
ejemplo_1_b.y = ejemplo_1_b.rapidez()
print(ejemplo_1_b.y)  # Correcto

ejemplo_1_c = Lanzamiento_Vertical_Abajo(vo=30.5, g=9.8, t=10, y=5)
ejemplo_1_c.vf = ejemplo_1_c.velocidad_final_cuadrado()
print(ejemplo_1_c.vf)  # Correcto


class Lanzamiento_Vertical_Arriba(Lanzamiento_Vertical_Abajo):

    def __init__(self, vf=0, vo=0, g=0, t=0, y=0, ymax=0, tmax=0):
        Lanzamiento_Vertical_Abajo.__init__(self, vf, vo, g, t, y)
        self.ymax = ymax
        self.tmax = tmax

    def velocidad_final(self):
        return self.vo - (self.g * self.t)

    def velocidad_final_cuadrado(self):
        return math.sqrt((self.vo**2) - (2 * self.g * self.y))

    def rapidez(self):
        return (self.vo * self.t) - (1/2 * self.g * self.t**2)

    def velocidad_final2(self):
        return self.g * self.t

    def velocidad_final_cuadrado2(self):
        return math.sqrt(2 * self.g * self.y)

    def rapidez2(self):
        return (1/2 * self.g * self.t)

    def rapidez_maxima(self):
        return (self.vo**2 / 2 * self.g)

    def tiempo_maximo(self):
        return self.vo / self.g