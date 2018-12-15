const boxHeight = 80
const textHeight = 14
const textMargin = 6

export const ChurchCirclesTemplate = {
    'version': '0.6',
    'title': 'Church Circles',
    'name': 'church-circles',
    'format': 'churchCircles',
    'translations': {
        en: {
            translation: {
                'churchCircles': {
                    'translationLabel': 'English',
                    // tslint:disable-next-line:max-line-length
                    'helpLegend': '<img src="assets/church-circles/genmapper-node-example-church-circles.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>Legend</h3><p>Each circle represents a group / church. Dashed circle means group, full circle means church.<br>On the top the numbers describe: # total, # believers, # baptized<br>Inside the circle are the elements that are practiced in the group.<br>On the left there numbers 1 to 7 represent which elements of 3/3 process are practised:<br>1 - Personal care<br>2 - Worship<br>3 - Accountability<br>4 - Vision casting<br>5 - Bible study<br>6 - Practice<br>7 - Set goals and prayer</p><p>Click on the group to edit it.<br>Click on red (x) button to remove group.<br>Click on green (+) button to add child group.</p>',
                    'name': 'Church Name',
                    'leaderName': 'Leader\'s Name',
                    'email': 'Email',
                    'peopleGroup': 'People Group',
                    'attenders': '# of Attenders',
                    'believers': '# of Believers',
                    'baptized': '# of Baptized',
                    'newlyBaptized': '# of New Baptized (since church start)',
                    'church': 'Is church?',
                    'churchType': 'Church Type',
                    'legacy': 'Legacy',
                    'existingBelievers': 'Existing Believers',
                    'newBelievers': 'New Believers',
                    'elementBaptism': 'Element: Baptism',
                    'elementWord': 'Element: God\'s Word',
                    'elementPrayer': 'Element: Prayer',
                    'elementLordsSupper': 'Element: Lord\'s supper',
                    'elementGive': 'Element: Giving',
                    'elementLove': 'Element: Love',
                    'elementWorship': 'Element: Worship',
                    'elementLeaders': 'Element: Leaders',
                    'elementMakeDisciples': 'Element: Make disciples',
                    'place': 'Place (City, State, Country)',
                    'date': 'Date of Start (Ex. 2017-01)',
                    'threeThirds': 'Elements of 3/3 process (see help for details)',
                    'active': 'Active',
                    'initialLeadersName': 'Leader\'s Name',
                    'initialPlace': 'Place',
                    'initialDate': 'Date',
                    'threeThirdsPastoralCare': 'Pastoral Care',
                    'threeThirdsWorship': 'Worship',
                    'threeThirdsAccountability': 'Accountability',
                    'threeThirdsVisionCasting': 'Vision Casting',
                    'threeThirdsBibleTeaching': 'Bible Teaching',
                    'threeThirdsPractice': 'Practice',
                    'threeThirdsGoalSetting': 'Goal Setting & Commission',
                }
            }
        },
        de: {
            translation: {
                'churchCircles': {
                    'translationLabel': 'Deutsch',
                    'helpLegend': '<img src="assets/church-circles/genmapper-node-example-church-circles.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>Erklärungen</h3><p>Jede Figur stellt eine Gruppe / Gemeinde dar. Eine gestrichelte Linie bedeutet Gruppe, eine durchgehende Linie bedeutet Gemeinde. Ein Quadrat bedeutet, dass die Teilnehmer bereits vorher Christen waren. Bei einem Kreis sind die Teilnehmer durch die Gruppe selbst zum Glauben gekommen oder sind noch nicht gläubig.</p><p>Ganz oben beschreiben die vier Zahlen jeweils die Anzahl der Teilnehmer, davon Anzahl Gläubige, davon Anzahl Getaufte und davon die Anzahl derer, die durch die Gruppe getauft wurden. Die Zahlen dürfen nach rechts hin nie größer werden.</p><p>In der Figur sind die Elemente der <a href="/start-training/lektion5" target="_blank">Definition von Gemeinde</a> zu sehen, die in der Gruppe auch gelebt werden.<br>Die Zahlen von 1 bis 8 links zeigen, welche der Elemente des <a href="/training/drei-drittel-prozess" target="_blank">Drei-Drittel-Prozesses</a> regelmäßig vorkommen:</p><ol><li>Wie geht\'s?</li><li>Auswertung</li><li>Vision</li><li>Lobpreis</li><li>Lehre</li><li>Üben</li><li>Ziele setzen</li><li>Gebet</li></ol><p>Klicke auf eine Gruppe, um sie zu bearbeiten.<br>Klicke auf die rote (x)-Schaltfläche, um die Gruppe zu löschen.<br>Klicke auf die grüne (+)-Schaltfläche, um eine Tochtergruppe hinzuzufügen.</p>',
                    'name': 'Church Name',
                    'leaderName': 'Leiter',
                    'email': 'Bemerkungen',
                    'peopleGroup': 'Sprache / Subkultur',
                    'attenders': 'Anzahl Teilnehmer',
                    'believers': 'Anzahl Gläubige',
                    'baptized': 'Anzahl Getaufte',
                    'newlyBaptized': 'Anzahl frisch Getaufte (seit Gemeindestart)',
                    'church': 'Ist Gemeinde?',
                    'churchType': 'Gemeinde-Typ',
                    'legacy': 'Traditionell',
                    'existingBelievers': 'Länger Gläubige',
                    'newBelievers': 'Neue Gläubige',
                    'elementBaptism': 'Element: Taufe',
                    'elementWord': 'Element: Lehre',
                    'elementPrayer': 'Element: Gebet',
                    'elementLordsSupper': 'Element: Abendmahl',
                    'elementGive': 'Element: Geben',
                    'elementLove': 'Element: Gemeinschaft',
                    'elementWorship': 'Element: Lobpreis',
                    'elementLeaders': 'Element: Leiter',
                    'elementMakeDisciples': 'Element: Multiplikation',
                    'place': 'Ort (Stadt, Region, Land)',
                    'date': 'Startdatum (z.B. 2017-01)',
                    'threeThirds': 'Elemente des 3/3-Prozesses (siehe Hilfe für mehr Informationen)',
                    'active': 'aktiv',
                    'initialLeadersName': 'Leiter',
                    'initialPlace': 'Ort',
                    'initialDate': 'Datum',
                    'threeThirdsPastoralCare': 'Pastoral Care',
                    'threeThirdsWorship': 'Worship',
                    'threeThirdsAccountability': 'Accountability',
                    'threeThirdsVisionCasting': 'Vision Casting',
                    'threeThirdsBibleTeaching': 'Bible Teaching',
                    'threeThirdsPractice': 'Practice',
                    'threeThirdsGoalSetting': 'Goal Setting & Commission',
                }
            }
        },
        es: {
            translation: {
                'churchCircles': {
                    'translationLabel': 'Español',
                    'helpLegend': '<img src="assets/church-circles/genmapper-node-example-church-circles.png" style="float:right;margin:10px; margin-left:0px;" alt="legend"><h3>Leyenda</h3><p>Cada círculo representa un grupo / iglesia. La línea de puntos significa un grupo. La línea completa significa una iglesia.<br>En la parte superior, los números describen: número de total, número de creyentes, número de bautizados<br>Dentro del círculo son los elementos que se practican en el grupo.<br>A la izquierda hay números del 1 al 7 representan qué elementos de 3/3 proceso se practican:<br>1 - Cuidado mutuo<br>2 - Adoración<br>3 - Rendir cuentas con amor<br>4 - Visión<br>5 - Biblia<br>6 - Práctica<br>7 - Establecer metas y Orar</p><p>Haga clic en el grupo para editarlo.<br>Haga clic en el botón rojo (x) para eliminar el grupo.<br>Haga clic en el botón verde (+) para añadir grupo secundario.</p>',
                    'name': 'Church Name',
                    'leaderName': 'Nombre de lider',
                    'initialLeadersName': 'Nombre de lider',
                    'email': 'Email',
                    'peopleGroup': 'Etnia',
                    'attenders': '# of participantes',
                    'believers': '# of creyentes',
                    'baptized': '# of bautizados',
                    'newlyBaptized': '# of nuevos bautizados (desde inicio de iglesia)',
                    'church': 'Iglesia?',
                    'churchType': 'Tipo de Iglesia',
                    'legacy': 'Tradicional',
                    'existingBelievers': 'Creyentes existentes',
                    'newBelievers': 'Nuevos creyentes',
                    'elementBaptism': 'Elemento: Bautismo',
                    'elementWord': 'Elemento: Biblia',
                    'elementPrayer': 'Elemento: Oración',
                    'elementLordsSupper': 'Elemento: Santa Cena',
                    'elementGive': 'Elemento: Dar/Generosidad',
                    'elementLove': 'Elemento: Amor',
                    'elementWorship': 'Elemento: Adorar',
                    'elementLeaders': 'Elemento: Lider',
                    'elementMakeDisciples': 'Elemento: Hacer discípulos',
                    'place': 'Lugar (Ciudad, Provincia, Pais):',
                    'initialPlace': 'Lugar',
                    'date': 'Fecha de Inicio (Ex. 2017-01)',
                    'initialDate': 'Fecha',
                    'threeThirds': 'Elementos del proceso de 3/3  (Ver ayuda para detalles):',
                    'active': 'Activo',
                    'threeThirdsPastoralCare': 'Pastoral Care',
                    'threeThirdsWorship': 'Worship',
                    'threeThirdsAccountability': 'Accountability',
                    'threeThirdsVisionCasting': 'Vision Casting',
                    'threeThirdsBibleTeaching': 'Bible Teaching',
                    'threeThirdsPractice': 'Practice',
                    'threeThirdsGoalSetting': 'Goal Setting & Commission',
                }
            }
        },
        cs: {
            translation: {
                'churchCircles': {
                    'translationLabel': 'Čeština',
                    'name': 'Church Name',
                    'leaderName': 'Jméno vedoucího',
                    'email': 'Email',
                    'peopleGroup': 'Etnikum',
                    'attenders': 'Počet účastníků',
                    'believers': 'Počet věřících',
                    'baptized': 'Počet pokřtěných',
                    'newlyBaptized': 'Počet nově pokřtěných (od začátku skupiny)',
                    'church': 'Je církev/Boží rodina?',
                    'churchType': 'Typ církve',
                    'legacy': 'Tradiční',
                    'existingBelievers': 'Existující věřící',
                    'newBelievers': 'Noví věřící',
                    'elementBaptism': 'Prvek: Křest',
                    'elementWord': 'Prvek: Boží Slovo',
                    'elementPrayer': 'Prvek: Modlitba',
                    'elementLordsSupper': 'Prvek: Připomínka Ježíšovy oběti',
                    'elementGive': 'Prvek: Dávání',
                    'elementLove': 'Prvek: Láska',
                    'elementWorship': 'Prvek: Oslava Ježíše',
                    'elementLeaders': 'Prvek: Vedoucí',
                    'elementMakeDisciples': 'Prvek: Činění učedníků',
                    'place': 'Místo',
                    'date': 'Datum začátku (např. 2017-01)',
                    'threeThirds': 'Prvky 3/3 (viz nápovědu pro více info)',
                    'active': 'Aktivní',
                    'initialLeadersName': 'Jméno',
                    'initialPlace': 'Místo',
                    'initialDate': 'Datum',
                    'threeThirdsPastoralCare': 'Vzájmená péče',
                    'threeThirdsWorship': 'Oslava Ježíše',
                    'threeThirdsAccountability': 'Návrat / Vykazatelnost',
                    'threeThirdsVisionCasting': 'Vize',
                    'threeThirdsBibleTeaching': 'Bible',
                    'threeThirdsPractice': 'Procvičování',
                    'threeThirdsGoalSetting': 'Akční kroky a modlitba',
                }
            }
        }
    },
    'settings': {
        'nodeSize': {
            'width': boxHeight * 1.5,
            'height': boxHeight * 2.1
        }
    },
    'svg': {
        'big-rect': {
            // Rect with opacity 0, so that one could hover over all the square even
            // if the visible shape is circle
            'type': 'rect',
            'attributes': {
                'x': -boxHeight / 2,
                'y': 0,
                'width': boxHeight,
                'height': boxHeight,
                'opacity': '0'
            }
        },
        'attenders-image': {
            'type': 'image',
            'attributes': {
                'x': -boxHeight * 0.5,
                'y': -2.5 * textHeight,
                'width': boxHeight / 4,
                'height': boxHeight / 4,
                'href': 'assets/church-circles/icons/attenders.png'
            }
        },
        'believers-image': {
            'type': 'image',
            'attributes': {
                'x': -boxHeight * 0.25,
                'y': -2.5 * textHeight,
                'width': boxHeight / 4,
                'height': boxHeight / 4,
                'href': 'assets/church-circles/icons/believers.png'
            }
        },
        'baptized-image': {
            'type': 'image',
            'attributes': {
                'x': boxHeight * 0.1,
                'y': -2.5 * textHeight,
                'width': boxHeight / 4,
                'height': boxHeight / 4,
                'href': 'assets/church-circles/icons/element-baptism.png'
            }
        },
        'church-box': {
            'type': 'rect',
            'attributes': {
                'x': -boxHeight / 2,
                'y': 0,
                'rx': 0.5 * boxHeight,
                'width': boxHeight,
                'height': boxHeight
            }
        }
    },
    'fields': [
        {
            'header': 'id',
            'initial': 0,
            'type': null
        },
        {
            'header': 'parentId',
            'initial': null,
            'type': null
        },
        {
            'header': 'name',
            'initial': '',
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': 0,
                    'y': boxHeight + textHeight
                }
            }
        },
        {
            'header': 'leaderName',
            'initialTranslationCode': 'initialLeadersName',
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': 0,
                    'y': (d) => {
                        let c = 1;
                        if (d.data.name) { c++; }
                        return boxHeight + c * textHeight;
                    }
                }
            }
        },
        {
            'header': 'email',
            'initial': null,
            'type': 'text'
        },
        {
            'header': 'peopleGroup',
            'initial': null,
            'type': 'text'
        },
        {
            'header': 'attenders',
            'initial': 0,
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': -boxHeight * 0.39,
                    'y': -0.5 * textMargin
                },
                'style': {
                    'text-anchor': 'center'
                }
            }
        },
        {
            'header': 'believers',
            'initial': 0,
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': -boxHeight * 0.13,
                    'y': -0.5 * textMargin
                },
                'style': {
                    'text-anchor': 'center'
                }
            }
        },
        {
            'header': 'baptized',
            'initial': 0,
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': boxHeight * 0.13,
                    'y': -0.5 * textMargin
                },
                'style': {
                    'text-anchor': 'center'
                }
            }
        },
        {
            'header': 'newlyBaptized',
            'initial': 0,
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': boxHeight * 0.39,
                    'y': -0.5 * textMargin
                },
                'style': {
                    'text-anchor': 'center'
                }
            }
        },
        {
            'header': 'church',
            'initial': false,
            'type': 'checkbox',
            'inheritsFrom': 'church-box',
            'class': {
                'checkedTrue': 'is-church',
                'checkedFalse': 'is-not-church'
            }
        },
        {
            'header': 'churchType',
            'initial': 'newBelievers',
            'type': 'radio',
            'inheritsFrom': 'church-box',
            'values': [
                {
                    'header': 'legacy',
                    'class': 'church-legacy',
                    'attributes': {
                        'rx': 0
                    }
                },
                {
                    'header': 'existingBelievers',
                    'attributes': {
                        'rx': 0
                    }
                },
                {
                    'header': 'newBelievers'
                }
            ]
        },
        {
            'header': 'elementBaptism',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': -boxHeight * 0.4,
                    'y': boxHeight * 0.1,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-baptism.png'
                }
            }
        },
        {
            'header': 'elementWord',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': -boxHeight * 0.125,
                    'y': boxHeight * 0.1,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-word.png'
                }
            }
        },
        {
            'header': 'elementPrayer',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': boxHeight * 0.15,
                    'y': boxHeight * 0.1,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-prayer.png'
                }
            }
        },
        {
            'header': 'elementLordsSupper',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': -boxHeight * 0.4,
                    'y': boxHeight * 0.375,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-lords-supper.png'
                }
            }
        },
        {
            'header': 'elementGive',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': -boxHeight * 0.125,
                    'y': boxHeight * 0.375,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-give.png'
                }
            }
        },
        {
            'header': 'elementLove',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': boxHeight * 0.15,
                    'y': boxHeight * 0.375,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-love.png'
                }
            }
        },
        {
            'header': 'elementWorship',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': -boxHeight * 0.4,
                    'y': boxHeight * 0.65,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-worship.png'
                }
            }
        },
        {
            'header': 'elementLeaders',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': -boxHeight * 0.125,
                    'y': boxHeight * 0.65,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-leaders.png'
                }
            }
        },
        {
            'header': 'elementMakeDisciples',
            'initial': false,
            'type': 'checkbox',
            'svg': {
                'type': 'image',
                'attributes': {
                    'x': boxHeight * 0.15,
                    'y': boxHeight * 0.65,
                    'width': boxHeight / 4,
                    'height': boxHeight / 4,
                    'xlink:href': 'assets/church-circles/icons/element-make-disciples.png'
                }
            }
        },
        {
            'header': 'place',
            'initialTranslationCode': 'initialPlace',
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': 0,
                    'y': (d) => {
                        let c = 1;
                        if (d.data.name) { c++; }
                        if (d.data.leaderName) { c++; }
                        return boxHeight + c * textHeight;
                    }
                },
            }
        },
        {
            'header': 'date',
            'initialTranslationCode': 'initialDate',
            'type': 'text',
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': 0,
                    'y': (d) => {
                        let c = 1;
                        if (d.data.name) { c++; }
                        if (d.data.leaderName) { c++; }
                        if (d.data.place) { c++; }
                        return boxHeight + c * textHeight;
                    }
                }
            }
        },
        {
            'header': 'threeThirds',
            'initial': ['1', '2', '3', '4', '5', '6', '7'],
            'type': 'multiSelect',
            'values': [
                { value: '1', header: 'threeThirdsPastoralCare' },
                { value: '2', header: 'threeThirdsWorship' },
                { value: '3', header: 'threeThirdsAccountability' },
                { value: '4', header: 'threeThirdsVisionCasting' },
                { value: '5', header: 'threeThirdsBibleTeaching' },
                { value: '6', header: 'threeThirdsPractice' },
                { value: '7', header: 'threeThirdsGoalSetting' },
            ],
            'svg': {
                'type': 'text',
                'attributes': {
                    'x': boxHeight * -0.7,
                    'y': boxHeight * 0.6,
                    'transform': 'rotate(90 -56 48)',
                    'rotate': -90
                },
                'style': {
                    'text-anchor': 'center',
                    'letter-spacing': '0.35em'
                }
            }
        },
        {
            'header': 'active',
            'initial': true,
            'type': 'checkbox'
            // svg defined currently in genmapper.js
        }
    ]
};
