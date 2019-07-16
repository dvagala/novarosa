<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpressdb' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'admin' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z9s]Bw^XIE4as)N&P]bhmwIbgHoW7?x9gQi?aF[aYhFzds$QdVyCk5fEF|%$J3U*' );
define( 'SECURE_AUTH_KEY',  'ijlXR s+fPUb!-n@dlEft2;sPa:TlWWO_NsAy06n26r1 g{7WB/ge;rrJX7*E2*y' );
define( 'LOGGED_IN_KEY',    '~JoiW}1Yl5|>rfvFu;>~?o>=)~<B]%yFVc3bN.EygyJqjP;o]Mi{$sJ,<28#^{(A' );
define( 'NONCE_KEY',        'NQFu~K)UWe7AiWxfR8KqQEwjw|EXR^+*o/SDsUD.bg MaB<hSHjm$ctcZj(+@6EQ' );
define( 'AUTH_SALT',        'lmabQ `6.Er!?7Q*9GQDO9dny--O+;j0[cZk5od3}Q!iZa`Y1my/7*]7Ie7gYOyW' );
define( 'SECURE_AUTH_SALT', '>!4*xoZf(DnXZOih<cz9,{H;(@f5JWo)vZ!-iu=~3OoQfJ l$CAf_KM`n@a5G<=Z' );
define( 'LOGGED_IN_SALT',   'SR|BE/NHFWrBGu]!Ba:91uQ>>wo&Ru}P`[|s6@*Z>*;[M>O)dpV9M1!3B N93~5Q' );
define( 'NONCE_SALT',       'u.x}PmJHo Re_^|P0XW+sOag=oL],HW%nP5aywmr;~CzLl7$z(8#bcQW<Ujl@6J&' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
