// ==========================
// Fonction "formateLeNombre"
// ==========================
/**
 * 
 * @param nbre Valeur à traiter
 * @param sep Séparateur des milliers (virgule, espace, ...)
 * @returns Valeur formatée
 */
module.exports.formateLeNombre = (nbre, sep='\u00a0') => {
    return nbre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}