-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2022 at 04:05 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parole`
--
CREATE DATABASE IF NOT EXISTS `parole` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `parole`;

-- --------------------------------------------------------

--
-- Table structure for table `parola`
--

CREATE TABLE `parole` (
  `word` varchar(5) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parola`
--

INSERT INTO `parole` (`word`, `value`) VALUES
('abiti', 798),
('abito', 1005),
('aceto', 1149),
('acida', 939),
('acido', 966),
('acqua', 827),
('acuto', 1023),
('addio', 903),
('aereo', 1226),
('agile', 806),
('agire', 873),
('aglio', 949),
('aiuto', 1042),
('album', 611),
('alcol', 976),
('alice', 869),
('alito', 1068),
('altro', 1099),
('amare', 1083),
('amaro', 1226),
('ambra', 920),
('amico', 996),
('amore', 1110),
('ampio', 965),
('anche', 754),
('anima', 971),
('ansia', 1037),
('apice', 855),
('arena', 1118),
('aroma', 1226),
('asino', 1064),
('atrio', 1135),
('audio', 923),
('avere', 925),
('avuto', 948),
('avvio', 879),
('bacio', 949),
('bagno', 869),
('banca', 905),
('banda', 842),
('barca', 953),
('basso', 996),
('bello', 780),
('benna', 791),
('birra', 823),
('bocca', 930),
('bolla', 896),
('bollo', 923),
('bomba', 817),
('bonus', 723),
('bordo', 944),
('borsa', 1013),
('bosco', 990),
('bozza', 762),
('brace', 837),
('bravo', 905),
('breve', 646),
('buono', 916),
('burro', 788),
('busta', 750),
('cagna', 922),
('caldo', 930),
('calma', 933),
('campo', 946),
('canto', 1068),
('capra', 1002),
('carne', 919),
('carro', 1110),
('carta', 1089),
('carte', 973),
('casco', 1043),
('causa', 973),
('cenno', 898),
('certo', 1000),
('cervo', 869),
('ciclo', 813),
('cieco', 913),
('cielo', 896),
('cigno', 769),
('circa', 853),
('circo', 880),
('clima', 753),
('cobra', 980),
('collo', 1003),
('colpa', 962),
('colpo', 989),
('comma', 944),
('conto', 1095),
('copia', 998),
('coppa', 948),
('corda', 997),
('corno', 1089),
('corpo', 1056),
('corsa', 1093),
('corso', 1120),
('costa', 1099),
('costo', 1126),
('crema', 884),
('crepa', 886),
('crisi', 706),
('croce', 944),
('crudo', 755),
('cuore', 901),
('curva', 716),
('danno', 951),
('danza', 838),
('degno', 770),
('denso', 866),
('dente', 746),
('denti', 682),
('dieci', 643),
('dieta', 879),
('disco', 800),
('ditta', 852),
('dolce', 814),
('donna', 951),
('drago', 934),
('droga', 934),
('entro', 1002),
('epoca', 1062),
('esame', 950),
('esito', 1002),
('etica', 942),
('etico', 969),
('extra', 857),
('falco', 919),
('falso', 952),
('fango', 875),
('farro', 1036),
('fatto', 1048),
('felpa', 745),
('fermo', 837),
('ferro', 920),
('festa', 882),
('fetta', 905),
('fiato', 1011),
('fibra', 699),
('fieno', 841),
('fiera', 862),
('fiero', 889),
('figli', 469),
('finto', 814),
('fiore', 889),
('firma', 746),
('fissa', 795),
('fisso', 822),
('fiume', 537),
('folla', 902),
('fondo', 902),
('fonte', 878),
('forma', 953),
('forno', 1015),
('forse', 903),
('forte', 926),
('forum', 711),
('forza', 902),
('fossa', 1002),
('frase', 876),
('frigo', 743),
('frode', 807),
('fuoco', 920),
('fuori', 763),
('furto', 800),
('gamba', 807),
('gamma', 854),
('gatto', 1059),
('genio', 852),
('gente', 746),
('gesto', 920),
('gioco', 993),
('gioia', 985),
('globo', 877),
('gocce', 831),
('golfo', 883),
('gomma', 881),
('gonna', 951),
('grado', 934),
('grano', 999),
('grato', 1053),
('grave', 779),
('greco', 881),
('grido', 754),
('guida', 634),
('gusto', 794),
('icona', 1031),
('invia', 749),
('invio', 776),
('isola', 1045),
('ladro', 980),
('larga', 953),
('largo', 980),
('latte', 962),
('leale', 916),
('legge', 608),
('legna', 789),
('legno', 816),
('lente', 792),
('lento', 935),
('leone', 962),
('letto', 989),
('libro', 783),
('liceo', 896),
('lieta', 925),
('lieto', 952),
('lieve', 678),
('linea', 871),
('lotta', 1105),
('lucci', 544),
('lungo', 690),
('luogo', 914),
('lusso', 817),
('madre', 821),
('magia', 906),
('magro', 964),
('mamma', 884),
('manzo', 895),
('marca', 1000),
('marea', 1083),
('marmo', 994),
('marzo', 943),
('massa', 1016),
('matto', 1089),
('mazza', 782),
('mazzo', 809),
('media', 790),
('medio', 817),
('mensa', 869),
('menta', 892),
('mente', 776),
('mento', 919),
('merce', 768),
('meteo', 1000),
('metro', 967),
('mezzo', 693),
('miele', 720),
('mille', 620),
('misto', 886),
('molte', 900),
('molti', 836),
('molto', 1043),
('mondo', 943),
('monte', 919),
('morso', 1087),
('morte', 967),
('morto', 1110),
('mucca', 708),
('muffa', 560),
('museo', 851),
('mutuo', 748),
('nervo', 871),
('nonna', 1016),
('nonno', 1043),
('norma', 1029),
('notte', 1008),
('nozze', 728),
('nulla', 709),
('nuora', 1019),
('nuoto', 1052),
('nuovo', 921),
('odore', 1107),
('oliva', 937),
('oltre', 983),
('ombra', 947),
('onore', 1172),
('opera', 1112),
('osare', 1176),
('ovest', 908),
('ovvio', 906),
('padre', 823),
('paese', 952),
('palma', 902),
('panca', 954),
('panna', 956),
('panne', 840),
('panno', 983),
('parco', 1029),
('parte', 942),
('passo', 1045),
('pasta', 1041),
('pasto', 1068),
('paura', 959),
('pausa', 942),
('pazzo', 811),
('pelle', 686),
('penna', 840),
('pesca', 869),
('pesce', 753),
('petto', 975),
('pezzo', 695),
('piace', 855),
('piano', 1000),
('picco', 799),
('piede', 676),
('piega', 792),
('pieno', 884),
('pigro', 786),
('pinza', 690),
('pista', 861),
('piuma', 696),
('pizza', 604),
('pochi', 684),
('poeta', 1118),
('pollo', 972),
('polpa', 931),
('polso', 1022),
('pompa', 915),
('ponte', 921),
('porro', 1106),
('porta', 1085),
('porto', 1112),
('posta', 1068),
('posto', 1095),
('prato', 1085),
('preda', 823),
('presa', 919),
('prete', 826),
('prima', 789),
('primo', 816),
('prova', 954),
('punta', 768),
('punto', 795),
('quale', 694),
('quasi', 680),
('quota', 910),
('radio', 1016),
('ragno', 999),
('rango', 999),
('ratto', 1172),
('razzo', 892),
('reale', 983),
('reato', 1199),
('regia', 873),
('regno', 883),
('resto', 1033),
('ricco', 880),
('rissa', 919),
('ritmo', 903),
('robot', 1063),
('rogna', 999),
('rosso', 1153),
('ruolo', 1027),
('ruota', 1073),
('russo', 884),
('sacco', 1043),
('sacro', 1093),
('saldi', 756),
('saldo', 963),
('salsa', 1032),
('salta', 1055),
('salto', 1082),
('salva', 924),
('salve', 808),
('sanno', 1047),
('santa', 1074),
('santo', 1101),
('sasso', 1109),
('sauna', 975),
('scala', 999),
('scena', 902),
('scopo', 1039),
('scudo', 738),
('scusa', 807),
('scuse', 691),
('sedia', 856),
('segno', 866),
('senso', 962),
('senza', 818),
('serie', 853),
('serio', 996),
('sesto', 1016),
('setta', 1012),
('sette', 896),
('sfera', 876),
('sfida', 699),
('socio', 1089),
('sodio', 1026),
('sogno', 1009),
('somma', 977),
('sonno', 1074),
('sopra', 1062),
('sorso', 1153),
('sosia', 1095),
('sosta', 1132),
('sotto', 1182),
('spada', 922),
('sparo', 1062),
('spesa', 902),
('spese', 786),
('sport', 919),
('sposa', 1045),
('sputo', 826),
('stand', 812),
('stare', 1006),
('stato', 1155),
('stelo', 966),
('stile', 759),
('stima', 859),
('succo', 801),
('suino', 822),
('suite', 733),
('suola', 983),
('suolo', 1010),
('suono', 1029),
('super', 677),
('svago', 905),
('tacco', 1066),
('talpa', 991),
('tanto', 1124),
('tardi', 846),
('tasca', 1072),
('tassa', 1105),
('tatto', 1178),
('tazza', 871),
('tempo', 886),
('tenda', 862),
('tende', 746),
('terra', 1023),
('terzo', 916),
('testa', 1012),
('testo', 1039),
('tetto', 1062),
('tigre', 730),
('tocco', 1093),
('torre', 1050),
('torta', 1172),
('torto', 1199),
('trama', 1056),
('trave', 898),
('treno', 1002),
('trono', 1145),
('tutti', 729),
('tutto', 936),
('udire', 631),
('udito', 780),
('ulivo', 695),
('umano', 936),
('umore', 868),
('unico', 789),
('unire', 696),
('unito', 845),
('usare', 907),
('usato', 1056),
('utile', 683),
('valle', 758),
('vario', 1004),
('vasto', 1024),
('venti', 670),
('vento', 877),
('verde', 663),
('verso', 902),
('vespa', 794),
('vetro', 925),
('video', 775),
('villa', 694),
('viola', 937),
('virus', 569),
('vista', 817),
('volpe', 771),
('volta', 974),
('volto', 1001),
('vuoto', 975),
('zaino', 947),
('zampa', 835),
('zebra', 753),
('zitto', 858),
('zucca', 657),
('zuppa', 595);