export const items = {
  "weapon": {
    1: {
      "Basic_Magazine": {
        "Description": "Increases ammo.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusClipSizePercent": "24",
        "BaseAttackDamagePercent": "15"
      },
      "Close_Quarters": {
        "Description": "Deal additional Weapon Damage when in close range to your target.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "Conditionals": {
          "CloseRangeBonusWeaponPower": "25",
          "CloseRangeBonusDamageRange": "15m"
        },
        "BulletShieldMaxHealth": "85"
      },
      "Headshot_Booster": {
        "Description": "Deal bonus Weapon Damage with headshots.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 7.5,
        "BonusFireRate": "5",
        "BulletShieldMaxHealth": "40",
        "Conditionals": { "HeadShotBonusDamage": "40" }
      },
      "High-Velocity_Mag": {
        "Description": null,
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusBulletSpeedPercent": "30",
        "BaseAttackDamagePercent": "12",
        "BulletShieldMaxHealth": "50"
      },
      "Hollow_Point_Ward": {
        "Description": "When you are above 60% health, deal additional Weapon Damage.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "TechPower": "4",
        "LifeThreshold": "60",
        "Conditionals": { "BaseAttackDamagePercent": "22" },
        "TechShieldMaxHealth": "85"
      },
      "Restorative_Shot": {
        "Description": "Your next bullet will heal you based on what target you hit.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 6.25,
        "Radius": "1m",
        "ProcChance": "100",
        "BaseAttackDamagePercent": "8",
        "Conditionals": { "HealFromHero": "40", "HealFromNPC": "15" },
        "BulletResist": "7"
      },
      "Monster_Rounds": {
        "Description": "Gain additional 35% Weapon Damage when attacking Troopers, Neutrals and Bosses.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "NonPlayerBonusWeaponPower": "35",
        "BonusHealth": "50",
        "BonusHealthRegen": "1",
        "NonPlayerBulletResist": "35"
      },
      "Rapid_Rounds": {
        "Description": null,
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusFireRate": "9",
        "BonusSprintSpeed": "1m"
      }
    },
    2: {
      "Active_Reload": {
        "Description": "While reloading, pressing [] during the highlighted portion will instantly finish your reload and grant you Fire Rate and Bullet Lifesteal.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 18,
        "Duration": "7",
        "BaseAttackDamagePercent": "10",
        "ReloadSpeedMultipler": "-20",
        "Conditionals": {
          "BulletLifestealPercent": "20",
          "BonusFireRate": "20"
        }
      },
      "Berserker": {
        "Description": "Your Weapon Damage increases as you take sustained damage.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusClipSize": "4",
        "BulletResist": "7",
        "Conditionals": {
          "DamageDuration": "10",
          "DamageToStack": "110",
          "WeaponPowerPerStack": "5",
          "MaxStacks": 10
        }
      },
      "Swift_Striker": {
        "Description": null,
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusFireRate": "22",
        "BonusClipSizePercent": "10",
        "LocalBulletArmorReduction": "-5"
      },
      "Mystic_Shot": {
        "Description": "Your next bullet deals bonus Spirit Damage.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 5.25,
        "Radius": "1m",
        "ProcChance": "100",
        "ProcCooldown": "1",
        "Conditionals": { "ProcBonusMagicDamage": "65" },
        "BaseAttackDamagePercent": "12",
        "SpiritPower": "4"
      },
      "Fleetfoot": {
        "Description": null,
        "Cost": "1250",
        "Tier": "2",
        "Activation": "InstantCast",
        "Slot": "weapon",
        "Cooldown": 19,
        "Duration": "4",
        "CastRange": "0",
        "Conditionals": {
          "MoveWhileShootingSpeedPenaltyReductionPercent": "100",
          "MoveWhileZoomedSpeedPenaltyReductionPercent": "100",
          "ActiveBonusMoveSpeed": "3m",
          "BonusClipSizePercent": "30"
        },
        "BonusClipDuration": "10",
        "BonusHealth": "90",
        "SlideScale": "25"
      },
      "Kinetic_Dash": {
        "Description": "Your next Dash-Jump does not cost an extra stamina and you gain Fire Rate and bonus Ammo until your next reload. Lasts up to s.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 10.5,
        "Duration": "8",
        "Conditionals": { "BonusFireRate": "25", "BonusClipSize": "5" },
        "BonusHealth": "100",
        "BonusHealthRegen": "1.5"
      },
      "Long_Range": {
        "Description": "Deal additional Weapon Damage when beyond a minimum distance from your target.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "Conditionals": {
          "LongRangeBonusWeaponPower": "40",
          "LongRangeBonusWeaponPowerMinRange": "15m"
        },
        "BonusClipSizePercent": "20",
        "BulletShieldMaxHealth": "140"
      },
      "Melee_Charge": {
        "Description": "Your next Heavy Melee attack against an enemy deals increased damage and reloads your weapon instantly.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 8.5,
        "BaseAttackDamagePercent": "15",
        "BonusHealth": "100",
        "MeleeDistanceScale": "40",
        "BonusHealthRegen": "1",
        "Conditionals": { "BonusHeavyMeleeDamage": "20" }
      },
      "Slowing_Bullets": {
        "Description": "Your bullets apply Movement Slow.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "TechPower": "5",
        "Conditionals": { "SlowPercent": "25", "SlowDuration": "1.3" },
        "BaseAttackDamagePercent": "16"
      },
      "Soul_Shredder_Bullets": {
        "Description": "Your bullets apply a debuff that amplifies your Spirit Damage against the target and grants you Spirit Lifesteal against them.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BaseAttackDamagePercent": "7",
        "Conditionals": {
          "ShreddersTechAmp": "10",
          "DebuffDuration": "6",
          "LifestealPercentHero": "20"
        }
      }
    },
    3: {
      "Hunter's_Aura": {
        "Description": "Reduces nearby enemies' Bullet Resist and Fire Rate. If there is only one enemy hero nearby, this effect is tripled.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusHealth": "150",
        "Conditionals": {
          "Radius": "15m",
          "BulletArmorReduction": "-9",
          "FireRateSlow": "10"
        },
        "SingleTargetPlayerMultiplier": "3"
      },
      "Burst_Fire": {
        "Description": "Briefly gain Fire Rate and Speed when one of your bullets hits an enemy hero.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 8.5,
        "Duration": "4.0",
        "BonusFireRate": "12",
        "Conditionals": { "ActivatedFireRate": "30", "BonusMoveSpeed": "2m" },
        "SlideScale": "50",
        "BonusHealth": "70"
      },
      "Tesla_Bullets": {
        "Description": "Your bullets have a chance to shock your target.  The shock will jump to a nearby enemy.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": 0.65,
        "Conditionals": {
          "DamagePerChain": "30",
          "BonusPerChain": "60",
          "ChainRadius": "8m",
          "ProcChance": "25",
          "ProcCooldown": "0.35",
          "ChainCount": "2",
          "ChainTickRate": "0.4"
        },
        "BonusFireRate": "14"
      },
      "Point_Blank": {
        "Description": "When in close range to your target, gain Weapon Damage and your bullets apply a Movement Slow.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Components": ["upgrade_close_range"],
        "Cooldown": "0",
        "Conditionals": {
          "CloseRangeBonusWeaponPower": "45",
          "SlowPercent": "25",
          "SlowDuration": "2",
          "CloseRangeBonusDamageRange": "15m"
        },
        "BulletResist": "15",
        "Stamina": "1"
      },
      "Heroic_Aura": {
        "Description": "Provides Fire Rate to nearby player minions.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "InstantCast",
        "Slot": "weapon",
        "Cooldown": 32,
        "Duration": "6",
        "CastRange": "0",
        "BulletLifestealPercent": "20",
        "Conditionals": {
          "BonusFireRate": "25",
          "BonusFireRatePlayerUnit": "40",
          "Radius": "20m",
          "ActiveRadius": "30m",
          "ActiveBonusMoveSpeed": "2m"
        },
        "BonusHealth": "150",
        "BonusMoveSpeed": "1m"
      },
      "Headhunter": {
        "Description": "Landing a headshot deals bonus damage, heals you for a portion of your Max HP, and briefly grants you bonus move speed.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Components": ["upgrade_high_velocity_mag"],
        "Cooldown": "0",
        "BonusBulletSpeedPercent": "50",
        "BaseAttackDamagePercent": "15",
        "BulletShieldMaxHealth": "150",
        "Conditionals": {
          "HeadShotBonusDamage": "140",
          "HeadShotCooldown": "6",
          "HealPercentPerHeadshot": "8",
          "BonusMoveSpeed": "2m",
          "MovementSpeedBonusDuration": "3"
        }
      },
      "Intensifying_Magazine": {
        "Description": "Increases Weapon Damage as you continuously fire your weapon.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusClipSizePercent": "25",
        "BaseAttackDamagePercent": "20",
        "Conditionals": {
          "ShootDurationForMax": "3.0",
          "BaseAttackDamagePercentAtMaxDuration": "75"
        }
      },
      "Pristine_Emblem": {
        "Description": "Your attacks have additional Weapon Damage against enemies above 50% health.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "TechPower": "12",
        "BaseAttackDamagePercent": "25",
        "Conditionals": {
          "BaseAttackDamagePercentBonus": "25",
          "EnemyLifeThreshold": "50"
        },
        "TechResist": "12"
      },
      "Escalating_Resilience": {
        "Description": "Grants Bullet Resist when your bullets hit an enemy hero. Each shot can only grant one stack.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "Conditionals": {
          "MaxArmorStacks": "40",
          "BulletResistPerStack": "2",
          "BulletResistDuration": "20"
        },
        "BaseAttackDamagePercent": "14",
        "BonusFireRate": "14"
      },
      "Sharpshooter": {
        "Description": "Deal additional Weapon Damage when beyond a minimum distance from your target.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Components": ["upgrade_long_range"],
        "Cooldown": "0",
        "BonusAttackRangePercent": "15",
        "BonusZoomPercent": "35",
        "BonusClipSizePercent": "20",
        "Conditionals": {
          "LongRangeBonusWeaponPower": "70",
          "LongRangeBonusWeaponPowerMinRange": "15m"
        },
        "BulletShieldMaxHealth": "200"
      },
      "Alchemical_Fire": {
        "Description": "Throw a flask that explodes on contact, creating an area that does increasing Spirit Damage per second and causes enemies to receive additional Weapon Damage from your team.<br><br>Deals 40% less DPS vs non-heroes.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "ActivationPress",
        "Slot": "weapon",
        "Cooldown": 28,
        "Duration": "5",
        "CastRange": "0",
        "TechPower": "11",
        "Conditionals": {
          "DPS": "45",
          "DPSIncrease": "8",
          "DPSMax": "95",
          "NonHeroReductionPercent": "40",
          "Radius": "10m",
          "HeightOffGround": "50",
          "TickRate": "0.5",
          "BonusBaseWeaponDamageTaken": "50"
        },
        "BulletShieldMaxHealth": "225",
        "BaseAttackDamagePercent": "14"
      },
      "Titanic_Magazine": {
        "Description": null,
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Components": ["upgrade_clip_size"],
        "Cooldown": "0",
        "BonusClipSizePercent": "100",
        "BaseAttackDamagePercent": "18",
        "BulletResist": "18"
      },
      "Toxic_Bullets": {
        "Description": "Your bullets build up a Bleed on enemies, causing them to lose a percentage of their current health over time. Also applies Healing Reduction on the bleeding target.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusHealth": "100",
        "Conditionals": {
          "DotHealthPercent": "5",
          "DotDuration": "3",
          "BuildUpPerShot": "0.8",
          "BuildUpDuration": "5",
          "TickRate": "0.5",
          "HealAmpReceivePenaltyPercent": "-65",
          "HealAmpRegenPenaltyPercent": "-65"
        }
      },
      "Warp_Stone": {
        "Description": "Teleport straight ahead, gaining Bullet Resist.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "InstantCast",
        "Slot": "weapon",
        "Cooldown": 16,
        "TechPower": "8",
        "BaseAttackDamagePercent": "20",
        "Conditionals": {
          "BulletResist": "30",
          "CastRange": "11m",
          "CasterBuffDuration": "5"
        }
      }
    },
    4: {
      "Crippling_Headshot": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BaseAttackDamagePercent": "20",
        "BulletLifestealPercent": "10",
        "LifestealPercentHero": "10",
        "Conditionals": {
          "BulletResistReduction": "24",
          "MagicResistReduction": "24",
          "DebuffDuration": "4"
        }
      },
      "Lucky_Shot": {
        "Description": "Your bullets have a chance to be empowered, causing them to deal bonus damage and Slow on hit.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "Radius": "1m",
        "Conditionals": {
          "ProcChance": "35",
          "SlowPercent": "30",
          "SlowDuration": "1.5",
          "CritDamagePercent": "90"
        },
        "BonusClipSizePercent": "30"
      },
      "Frenzy": {
        "Description": 'While you are below 40% health, you gain stat bonuses',
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BonusClipSize": "12",
        "BaseAttackDamagePercent": "30",
        "BonusHealth": "200",
        "Conditionals": {
          "LowHealthThreshold": "40",
          "FervorMovespeed": "4m",
          "FervorFireRate": "40",
          "FervorTechResist": "45"
        },
        "LingerDuration": "6"
      },
      "Glass_Cannon": {
        "Description": "Each hero kill grants permanent Weapon Damage (up to a max of 7 times).  Death results in the loss of 1 stack.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BaseAttackDamagePercent": "70",
        "MaxHealthLossPercent": "-15",
        "BonusFireRate": "10",
        "BonusMoveSpeed": "1m",
        "Conditionals": {
          "WeaponPowerPerKill": "10",
          "MaxStacks": "7",
          "BonusClipPerKill": "2",
          "MaxClipBonus": "14"
        }
      },
      "Ricochet": {
        "Description": "Your bullets will ricochet on enemies near your target, applying any bullet procs and dealing a percentage of the original damage.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "Conditionals": {
          "RicochetDamagePercent": "60",
          "RicochetRadius": "14m",
          "RicochetTargetsTooltipOnly": "2"
        },
        "BonusClipSizePercent": "35",
        "BonusHealth": "150",
        "BonusFireRate": "12"
      },
      "Silencer": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "weapon",
        "Components": ["upgrade_slowing_bullets"],
        "Cooldown": 36,
        "Duration": "4",
        "CastRange": "0",
        "BaseAttackDamagePercent": "20",
        "SlowPercent": "25",
        "SlowDuration": "1.3",
        "Conditionals": { "EMPDuration": "2" }
      },
      "Siphon_Bullets": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "BaseAttackDamagePercent": "28",
        "StealPerHit": "1",
        "StackLostPerDeath": "2",
        "MaxStacks": "99",
        "StealDuration": "20",
        "ProcCooldown": "0.8",
        "HealthSteal": "45",
        "ParticleRadius": "1m"
      },
      "Vampiric_Burst": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "weapon",
        "Cooldown": 37,
        "Duration": "4.5",
        "CastRange": "0",
        "BonusMoveSpeed": "2m",
        "BaseAttackDamagePercent": "25",
        "BonusHealth": "150",
        "Conditionals": {
          "ActiveReloadPercent": "50",
          "ActiveBonusFireRate": "40",
          "ActiveBonusLifesteal": "100"
        }
      },
      "Spiritual_Overflow": {
        "Description": "Gain bonus Spirit Power by charging up with your bullets on enemy heroes.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "weapon",
        "Cooldown": "0",
        "Duration": "18",
        "CooldownReduction": "15",
        "LifestealPercentHero": "10",
        "BonusFireRate": "20",
        "Conditionals": {
          "BonusSpirit": "45",
          "BuildUpPerShot": "0.75",
          "BuildUpDuration": "5"
        }
      }
    }
  },
  "spirit": {
    1: {
      "Spirit_Strike": {
        "Description": "When you perform a Light or Heavy Melee attack against a hero, deal extra Spirit Damage with the attack and reduce the target's Spirit Resist.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": 8.5,
        "Duration": "11",
        "Conditionals": {
          "SpiritDamage": "50",
          "TechArmorDamageReduction": "-12"
        },
        "TechShieldMaxHealth": "80",
        "BonusHealthRegen": "0.8",
        "BonusMeleeDamagePercent": "12"
      },
      "Ammo_Scavenger": {
        "Description": "Any time you secure or deny a Soul you get ammo back and gain stacking Spirit Power.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "Duration": "35",
        "BonusClipSizePercent": "15",
        "BonusHealth": "60",
        "Conditionals": {
          "AmmoPerSoul": "2",
          "SpiritPowerPerSoul": "2",
          "MaxStacks": "12"
        }
      },
      "Extra_Charge": {
        "Description": "Adds one to your ability max charges.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "BonusAbilityCharges": "1",
        "BonusSpiritForChargedAbilities": "0",
        "CooldownReductionOnChargedAbilities": "10",
        "BaseAttackDamagePercent": "6"
      },
      "Extra_Spirit": {
        "Description": null,
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "TechPower": "9",
        "BonusHealthRegen": "1",
        "BonusHealth": "35"
      },
      "Infuser": {
        "Description": "Gain Spirit Power and Spirit Lifesteal.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "InstantCast",
        "Slot": "spirit",
        "Cooldown": 37,
        "Duration": "6",
        "CastRange": "0",
        "BonusHealth": "50",
        "BonusClipSizePercent": "10",
        "Conditionals": { "BonusSpirit": "16", "LifestealPercentHero": "20" }
      },
      "Mystic_Burst": {
        "Description": "Abilities deal bonus Spirit Damage if they deal 80 damage or more in a single hit.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": 6.25,
        "Conditionals": { "Damage": "35", "MinimumDamage": "80" },
        "TechShieldMaxHealth": "40",
        "BaseAttackDamagePercent": "6"
      },
      "Mystic_Reach": {
        "Description": "Increases the range and effect radius of your abilities and items.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "TechRangeMultiplier": "16",
        "TechRadiusMultiplier": "16",
        "TechResist": "6"
      }
    },
    2: {
      "Duration_Extender": {
        "Description": "Increases the Duration of your abilities and items.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "BonusAbilityDurationPercent": "16",
        "BonusHealth": "100",
        "BonusHealthRegen": "1.75"
      },
      "Bullet_Resist_Shredder": {
        "Description": "Reduces Bullet Resist on enemies when you deal Spirit Damage.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "Duration": "8",
        "Conditionals": { "BulletArmorReduction": "-12" },
        "BonusHealth": "100",
        "BulletResist": "5"
      },
      "Cold_Front": {
        "Description": "Release an expanding ice blast that deals Spirit Damage and Slows targets it hits.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "InstantCast",
        "Slot": "spirit",
        "Cooldown": 34,
        "Duration": "3.0",
        "CastRange": "0",
        "Conditionals": {
          "SpreadDuration": "0.75",
          "StartRadius": "2m",
          "EndRadius": "14m",
          "SlowPercent": "40",
          "Damage": "75"
        },
        "TechResist": "10"
      },
      "Slowing_Hex": {
        "Description": "Deals Spirit Damage and Slows targets movement and dashes. Also Silences their movement-based items and abilities.<br>Does not affect target's stamina usage.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "ActivationPress",
        "Slot": "spirit",
        "Cooldown": 26,
        "Duration": "3.0",
        "CastRange": "25m",
        "TechPower": "5",
        "BonusSprintSpeed": "1m",
        "Conditionals": {
          "GroundDashReductionPercent": "-30",
          "SlowPercent": "30",
          "Damage": "70"
        }
      },
      "Improved_Cooldown": {
        "Description": "Reduces the Cooldown of your abilities and items.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "CooldownReduction": "16",
        "BonusHealthRegen": "1.5"
      },
      "Mystic_Vulnerability": {
        "Description": "When the target takes Spirit Damage, they have their Spirit Resist reduced.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "Duration": "6",
        "Conditionals": { "TechArmorDamageReduction": "-12" },
        "TechResist": "6"
      },
      "Quicksilver_Reload": {
        "Description": "Imbue an ability with bonus Spirit Damage on the first hit.  When the ability is used, your weapon is reloaded and has a Fire Rate bonus for that clip.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "Conditionals": {
          "ProcCooldown": "12",
          "FireRateBonus": "15",
          "FireRateDuration": "12",
          "Damage": "65"
        }
      },
      "Decay": {
        "Description": "Reduces healing received of targeted enemy and inflicts damage over time of their current health.<br>Decay's damage is non-lethal.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "ActivationPress",
        "Slot": "spirit",
        "Cooldown": 32,
        "Duration": "10",
        "CastRange": "15m",
        "TechPower": "7",
        "Conditionals": {
          "HealAmpReceivePenaltyPercent": "-50",
          "HealAmpRegenPenaltyPercent": "-50",
          "TickRate": "1.0",
          "DotHealthPercent": "3.1"
        }
      },
      "Suppressor": {
        "Description": "When you deal Spirit Damage to enemies, you also apply Fire Rate Slow.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": "0",
        "Duration": "2.0",
        "TechPower": "4",
        "BonusHealth": "50",
        "BonusHealthRegen": "2.5",
        "Conditionals": { "FireRateSlow": "25" }
      },
      "Withering_Whip": {
        "Description": "Target an enemy to apply Fire Rate Slow and reduce their Bullet Resist.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "ActivationPress",
        "Slot": "spirit",
        "Cooldown": 26,
        "Duration": "4.5",
        "CastRange": "24m",
        "Conditionals": { "FireRateSlow": "40", "BulletArmorReduction": "-14" },
        "BonusFireRate": "8",
        "SpiritPower": "4",
        "BonusHealth": "50"
      }
    },
    3: {
      "Superior_Cooldown": {
        "Description": "Reduces the Cooldown of your abilities and items.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_magic_tempo"],
        "Cooldown": "0",
        "ImbuedCooldownReduction": "32",
        "NonImbuedCooldownReduction": "24",
        "BonusHealthRegen": "4"
      },
      "Superior_Duration": {
        "Description": "Increases the duration of your abilities and items.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_arcane_extension"],
        "Cooldown": "0",
        "ImbuedBonusDuration": "32",
        "NonImbuedBonusDuration": "26",
        "BonusHealth": "175",
        "BaseAttackDamagePercent": "15",
        "BonusHealthRegen": "4"
      },
      "Improved_Burst": {
        "Description": "Abilities deal bonus Spirit Damage if they deal 125 damage or more in a single hit.<br/>Targets are immune to the effects of Improved Burst for 5s after taking damage from it.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_magic_burst"],
        "Cooldown": "0",
        "Conditionals": {
          "MinimumDamage": "125",
          "ReProcLockoutTime": "5",
          "MaxHealthDamage": "9",
          "TechShieldMaxHealth": "100",
          "BaseAttackDamagePercent": "8"
        }
      },
      "Mystic_Slow": {
        "Description": "When the target takes Spirit Damage, they have their Movement Speed and Fire Rate reduced.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_suppressor"],
        "Cooldown": "0",
        "Duration": "2.0",
        "TechPower": "6",
        "Conditionals": { "FireRateSlow": "40", "MovementSpeedSlow": "30" },
        "BonusHealthRegen": "3",
        "BonusHealth": "100"
      },
      "Surge_of_Power": {
        "Description": "Imbue an ability with permanent Spirit Power. When that ability is used, gain bonus Movement Speed.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": 10.5,
        "Conditionals": {
          "ImbuedTechPower": "34",
          "FireRateBonus": "10",
          "BonusMoveSpeed": "3m",
          "MovementSpeedBonusDuration": "6"
        },
        "BonusHealth": "75"
      },
      "Rapid_Recharge": {
        "Description": null,
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_extra_charge"],
        "Cooldown": "0",
        "CooldownBetweenChargeReduction": "55",
        "BonusAbilityCharges": "2",
        "CooldownReductionOnChargedAbilities": "25",
        "BaseAttackDamagePercent": "12"
      },
      "Ethereal_Shift": {
        "Description": "You enter a void state and become untargetable and invincible for a short duration, during which you cannot move or perform any actions. Afterwards you instantly reload and gain bonus Spirit Power.<br>Can be cancelled early.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "InstantCast",
        "Slot": "spirit",
        "Cooldown": 32,
        "Duration": "3.5",
        "CastRange": "0",
        "Conditionals": {
          "BonusSpirit": "14",
          "BonusSpiritDuration": "10",
          "DampingFactor": "3",
          "LiftHeight": "120",
          "MoveSpeedMax": "0m"
        }
      },
      "Improved_Spirit": {
        "Description": null,
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_improved_spirit"],
        "Cooldown": "0",
        "TechPower": "21",
        "BonusHealthRegen": "3",
        "BonusSprintSpeed": "1m",
        "BonusHealth": "100"
      },
      "Knockdown": {
        "Description": "Target is knocked down and Stunned after a 2s delay, interrupting and temporarily preventing them from taking any action.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "ActivationPress",
        "Slot": "spirit",
        "Cooldown": 48,
        "CastRange": "45m",
        "TechPower": "6",
        "TechShieldMaxHealth": "200",
        "Stamina": "1",
        "Conditionals": {
          "StunDelay": "2",
          "StunDuration": "0.9",
          "VisualContractRadius": "3m",
          "Damage": "20"
        }
      },
      "Silence_Glyph": {
        "Description": "Fires a projectile which silences and damages the target. Silence does not interrupt channeling abilities.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "ActivationPress",
        "Slot": "spirit",
        "Cooldown": 32,
        "Duration": "3.0",
        "CastRange": "25m",
        "Conditionals": { "Damage": "100" },
        "TechShieldMaxHealth": "150",
        "BonusSprintSpeed": "1m"
      },
      "Torment_Pulse": {
        "Description": "Periodically deals Spirit Damage to the closest two enemies nearby.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": 1.75,
        "TechPower": "6",
        "BonusHealth": "140",
        "Conditionals": { "DamagePulseAmount": "40", "DamagePulseRadius": "9m" }
      },
      "Improved_Reach": {
        "Description": "Increases the range and effect radius of your abilities and items.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_magic_reach"],
        "Cooldown": "0",
        "TechPower": "8",
        "NonImbuedTechRangeMultiplier": "25",
        "NonImbuedTechRadiusMultiplier": "25",
        "ImbuedTechRangeMultiplier": "35",
        "ImbuedTechRadiusMultiplier": "35",
        "TechResist": "12"
      }
    },
    4: {
      "Echo_Shard": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "spirit",
        "Cooldown": 21,
        "CastRange": "0",
        "TechPower": "12",
        "BonusMoveSpeed": "1m",
        "BulletResist": "16"
      },
      "Refresher": {
        "Description": "Reset the cooldown of all your abilities and restore all your charges.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "spirit",
        "Cooldown": 212,
        "CastRange": "0",
        "TechResist": "16",
        "BulletResist": "8"
      },
      "Diviner's_Kevlar": {
        "Description": "Upon casting an ultimate ability gain temporary Bullet Shield, Spirit Shield, and Spirit Power.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": 64,
        "LifestealPercentHero": "20",
        "CooldownReduction": "12",
        "Conditionals": {
          "TechPower": "40",
          "BulletShieldOnCast": "700",
          "TechShieldOnCast": "700",
          "BuffDuration": "15"
        }
      },
      "Escalating_Exposure": {
        "Description": "Dealing Spirit Damage applies a stacking Spirit Amp that increases your Spirit Damage to the target.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_magic_vulnerability"],
        "Cooldown": "0",
        "Duration": "15",
        "Conditionals": { "ProcCooldown": "0.7", "MagicIncreasePerStack": "6" },
        "TechResist": "15",
        "BonusHealth": "125",
        "TechArmorDamageReduction": "-15"
      },
      "Curse": {
        "Description": "Curses an enemy - interrupting, Silencing, Disarming, and preventing item usage.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "ActivationPress",
        "Slot": "spirit",
        "Cooldown": 53,
        "Duration": "3.25",
        "CastRange": "20m",
        "TechPower": "8",
        "BaseAttackDamagePercent": "20",
        "Conditionals": { "SkipFrames": "6", "SlowPercent": "0" }
      },
      "Magic_Carpet": {
        "Description": "Summon a Magic Carpet that will fly you away and gain Bullet and Spirit shields.  Cannot use abilities while the carpet is being summoned.  While flying you are immune to slows and doing any action will dismiss the carpet.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "spirit",
        "Cooldown": 32,
        "Duration": "7",
        "CastRange": "0",
        "TechPower": "15",
        "Conditionals": {
          "SummonDuration": "1.3",
          "ShieldDuration": "16",
          "FlyingBulletShield": "400",
          "FlyingTechShield": "400",
          "FlyMoveSpeed": "6m"
        },
        "BonusHealth": "150",
        "BonusAbilityDurationPercent": "10"
      },
      "Boundless_Spirit": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "spirit",
        "Components": ["upgrade_soaring_spirit"],
        "Cooldown": "0",
        "TechPower": "60",
        "BonusHealthRegen": "15",
        "BaseAttackDamagePercent": "25",
        "BonusSprintSpeed": "2m",
        "BonusHealth": "300"
      },
      "Mystic_Reverb": {
        "Description": "Imbue an ability to apply slow in a radius around the target and deal an additional percentage of the damage dealt to enemies around the target after a short delay.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "spirit",
        "Cooldown": 6.25,
        "Radius": "16m",
        "LifestealPercentHero": "15",
        "TechResist": "15",
        "TechRangeMultiplier": "15",
        "Conditionals": {
          "MovementSpeedSlow": "50",
          "TechDamagePercent": "40",
          "DelayDuration": "3",
          "MinimumDamage": "100"
        }
      }
    }
  },
  "vitality": {
    1: {
      "Extra_Regen": {
        "Description": null,
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BonusHealthRegen": "2.8",
        "BonusClipSizePercent": "8",
        "BonusHealth": "25"
      },
      "Extra_Health": {
        "Description": "Increase health.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BonusHealth": "160",
        "BaseAttackDamagePercent": "5"
      },
      "Healing_Rite": {
        "Description": "Grant Regen and Sprint Speed to the target. Gets dispelled if you take damage from enemy players or objectives. Can be self-cast.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "ActivationPress",
        "Slot": "vitality",
        "Cooldown": 64,
        "CastRange": "30m",
        "TechPower": "3",
        "BonusHealth": "45",
        "Conditionals": {
          "TotalHealthRegen": "370",
          "RegenDuration": "17",
          "BonusSprintSpeed": "2m"
        }
      },
      "Extra_Stamina": {
        "Description": null,
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "Stamina": "1",
        "StaminaCooldownReduction": "10",
        "BonusFireRate": "7"
      },
      "Melee_Lifesteal": {
        "Description": "Your Melee attacks heal you for 20% of the Melee Damage dealt plus 90. This heal is 40% effective vs non-heroes.",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": 7.5,
        "BonusMeleeDamagePercent": "13",
        "BonusHealth": "75",
        "LifestrikeHeal": "90",
        "Conditionals": {
          "LifestrikeHealPercent": "20",
          "NonHeroHealPct": "40"
        }
      },
      "Enduring_Spirit": {
        "Description": null,
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "TechPower": "4",
        "BonusHealth": "75",
        "LifestealPercentHero": "10"
      },
      "Sprint_Boots": {
        "Description": "Increases your forward movement speed over time. Taking damage resets the effect for 1.5s",
        "Cost": "500",
        "Tier": "1",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BonusSprintSpeed": "2m",
        "BaseAttackDamagePercent": "4",
        "BonusHealthRegen": "1"
      }
    },
    2: {
      "Bullet_Armor": {
        "Description": "Decreases damage taken from bullets.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BulletResist": "20",
        "BaseAttackDamagePercent": "6"
      },
      "Enduring_Speed": {
        "Description": "Reduces the effect of enemy Movement Slow.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Components": ["upgrade_sprint_booster"],
        "Cooldown": "0",
        "BonusMoveSpeed": "1.4m",
        "BonusSprintSpeed": "2m",
        "BonusHealth": "75",
        "BonusHealthRegen": "1.5",
        "Conditionals": { "SlowResistancePercent": "40" }
      },
      "Debuff_Reducer": {
        "Description": "Reduces the duration of all negative effects applied to you.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BaseAttackDamagePercent": "6",
        "BonusHealth": "75",
        "Conditionals": { "StatusResistancePercent": "30" }
      },
      "Healbane": {
        "Description": "Your Spirit Damage applies Healing Reduction. If an enemy hero dies under this effect, you receive a large heal.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "Duration": "6",
        "BonusHealth": "75",
        "Conditionals": {
          "HealAmpReceivePenaltyPercent": "-40",
          "HealAmpRegenPenaltyPercent": "-40",
          "HealOnKill": "350"
        }
      },
      "Healing_Booster": {
        "Description": "Increases the effectiveness of your healing by 25% and increases your resistance to healing reduction by 15%.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BonusHealthRegen": "2",
        "TechResist": "6",
        "Conditionals": {
          "HealAmpCastPercent": "25",
          "HealAmpRegenPercent": "25",
          "DegenResistance": "15"
        }
      },
      "Health_Nova": {
        "Description": "Heal yourself and nearby allies. Heals an additional 20% per ally.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Components": ["upgrade_health_stimpak"],
        "Cooldown": 64,
        "CastRange": "0",
        "BaseAttackDamagePercent": "10",
        "BonusHealth": "100",
        "TechPower": "4",
        "Conditionals": {
          "TotalHealthRegen": "260",
          "HeroTargetBonus": "20",
          "RegenDuration": "2",
          "AuraRadius": "15m"
        }
      },
      "Enchanter's_Barrier": {
        "Description": "While you have a Spirit Shield, gain bonus Spirit Power and Cooldown Reduction.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "TechShieldMaxHealth": "300",
        "Conditionals": {
          "BonusSpiritWithMagicShield": "20",
          "CooldownReductionWithShield": "8"
        }
      },
      "Combat_Barrier": {
        "Description": "While you have a Bullet Shield, gain Weapon Damage and Fire Rate.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BulletShieldMaxHealth": "300",
        "Conditionals": {
          "AttackDamageWhenShielded": "28",
          "FireRateWhenShielded": "8"
        }
      },
      "Restorative_Locket": {
        "Description": null,
        "Cost": "1250",
        "Tier": "2",
        "Activation": "ActivationPress",
        "Slot": "vitality",
        "Cooldown": 30,
        "CastRange": "30m",
        "TechPower": "5",
        "TechResist": "8",
        "Conditionals": {
          "Radius": "50m",
          "HealPerStack": "35",
          "MaxStacks": "15"
        }
      },
      "Return_Fire": {
        "Description": "Automatically fire a bullet towards any attacker who damages you with their abilities or weapon.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Cooldown": 25,
        "Duration": "7",
        "CastRange": "0",
        "TechPower": "7",
        "BonusFireRate": "7",
        "BonusHealth": "125",
        "Conditionals": {
          "SpiritDamageReflectedPct": "30",
          "BulletDamageReflectedPct": "70"
        }
      },
      "Divine_Barrier": {
        "Description": "Provide the target with Bullet Shield, Spirit Shield, and Movement Speed. Can be self-cast.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "ActivationPress",
        "Slot": "vitality",
        "Cooldown": 30,
        "CastRange": "35m",
        "TechRangeMultiplier": "8",
        "TechRadiusMultiplier": "8",
        "BonusSprintSpeed": "1m",
        "Conditionals": {
          "BonusMoveSpeed": "2m",
          "BuffDuration": "5",
          "SaviorBulletShieldHealth": "260",
          "SaviorMagicShieldHealth": "260"
        },
        "BonusHealth": "75"
      },
      "Spirit_Armor": {
        "Description": "Reduces the damage you take from Spirit abilities.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "TechPower": "5",
        "TechResist": "20"
      },
      "Reactive_Barrier": {
        "Description": "Automatically deploy temporary Bullet and Spirit Shields when you are movement locked, Stunned, Chained, Immobilized, or Slept.",
        "Cost": "1250",
        "Tier": "2",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": 32,
        "Duration": "10",
        "Conditionals": {
          "VexBarrierBulletMaxHealth": "400",
          "VexBarrierTechMaxHealth": "200",
          "VexBarrierShieldDuration": "9"
        },
        "BonusClipSizePercent": "15",
        "BonusHealth": "75",
        "BonusHealthRegen": "2"
      }
    },
    3: {
      "Lifestrike": {
        "Description": "Your Melee Attack applies Movement Slow and heals you for 55% of the Melee Damage dealt plus 110. This heal is 40% effective vs non-heroes.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "vitality",
        "Components": ["upgrade_lifestrike_gauntlets"],
        "Cooldown": 5.25,
        "Conditionals": {
          "SlowPercent": "60",
          "SlowDuration": "2.5",
          "LifestealHeal": "110",
          "LifestealHealPercent": "55",
          "NonHeroHealPct": "40"
        },
        "BonusMeleeDamagePercent": "35",
        "BulletResist": "8",
        "BonusHealth": "125"
      },
      "Improved_Bullet_Armor": {
        "Description": "Decreases damage taken from bullets.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "vitality",
        "Components": ["upgrade_bullet_armor"],
        "Cooldown": "0",
        "BulletResist": "45",
        "BaseAttackDamagePercent": "10"
      },
      "Fortitude": {
        "Description": "After not taking damage for 11s, gain 4% Max Health Regen.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "Conditionals": {
          "RestoreDelay": "11",
          "HealLifePercentOutOfCombat": "4",
          "HealthThreshold": "75",
          "BonusMoveSpeed": "2m",
          "BaseAttackDamagePercent": "25"
        },
        "BonusHealth": "275"
      },
      "Metal_Skin": {
        "Description": "Become immune to bullets and melee attacks.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Cooldown": 21,
        "Duration": "3.5",
        "CastRange": "0",
        "TechPower": "8",
        "BonusFireRate": "8",
        "BonusHealth": "125"
      },
      "Debuff_Remover": {
        "Description": "Reduces the duration of all negative effects applied to you.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Components": ["upgrade_debuff_reducer"],
        "Cooldown": 48,
        "CastRange": "0",
        "Conditionals": {
          "StatusResistancePercent": "35",
          "ActiveBonusMoveSpeed": "3m",
          "BuffDuration": "3"
        },
        "BaseAttackDamagePercent": "20",
        "BonusHealth": "125"
      },
      "Rescue_Beam": {
        "Description": "Heals a target allied hero and yourself for a percentage of Max Health. Once while healing, you can Pull the target towards you. Can be self-cast.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "ActivationPress",
        "Slot": "vitality",
        "Cooldown": 26,
        "CastRange": "36m",
        "Conditionals": {
          "HealPercentAmount": "26",
          "HealInterval": "0.2",
          "BonusMoveSpeed": "0m",
          "SelfModifier": "100"
        },
        "BonusHealth": "125",
        "BonusSprintSpeed": "2m",
        "TechPower": "9"
      },
      "Majestic_Leap": {
        "Description": "Launch yourself high into the air. While in the air, you can use the active again to drop down faster.<br>Cannot be used for 5s if attacked by enemy Hero.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Cooldown": 23,
        "CastRange": "0",
        "Conditionals": { "InteruptCooldown": "5" },
        "BonusHealth": "125",
        "TechPower": "10"
      },
      "Superior_Stamina": {
        "Description": null,
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "vitality",
        "Components": ["upgrade_improved_stamina"],
        "Cooldown": "0",
        "TechPower": "8",
        "Stamina": "3",
        "StaminaCooldownReduction": "20",
        "BonusFireRate": "7",
        "AirMoveIncreasePercent": "30"
      },
      "Improved_Spirit_Armor": {
        "Description": null,
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "vitality",
        "Components": ["upgrade_tech_armor"],
        "Cooldown": "0",
        "TechPower": "8",
        "TechResist": "45"
      },
      "Veil_Walker": {
        "Description": "Walking through a cosmic veil grants you Stealth, increased Movement Speed, restores all Bullet and Spirit Shields, and grants bonus Fire Rate for your next magazine.",
        "Cost": "3000",
        "Tier": "3",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": 18,
        "Duration": "16",
        "Conditionals": {
          "SpottedRadius": "20m",
          "BonusFireRate": "30",
          "InvisDuration": "5",
          "BonusMoveSpeed": "3m"
        }
      }
    },
    4: {
      "Shadow_Weave": {
        "Description": "Become Stealthed. Whenever you take damage while Stealthed you get briefly revealed.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Cooldown": 48,
        "Duration": "25",
        "CastRange": "0",
        "TechShieldMaxHealth": "300",
        "BonusHealthRegen": "15",
        "BonusClipSizePercent": "30",
        "Conditionals": {
          "InvisMoveSpeedMod": "2m",
          "SpottedRadius": "18m",
          "FullInvisDistance": "50m",
          "AmbushDuration": "8",
          "AmbushBonusFireRate": "40",
          "AmbushBonusTechPower": "55"
        }
      },
      "Colossus": {
        "Description": "Gain Bullet and Spirit Resist, and slow the movement and dash speed of enemies nearby. Your model size grows by 20%.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Cooldown": 37,
        "Duration": "7",
        "CastRange": "0",
        "BonusHealth": "600",
        "BonusMeleeDamagePercent": "20",
        "BaseAttackDamagePercent": "20",
        "Conditionals": {
          "BulletResist": "40",
          "TechResist": "40",
          "SlowPercent": "35",
          "GroundDashReductionPercent": "-25",
          "Radius": "12m",
          "ModelScaleGrowth": "1.2"
        }
      },
      "Leech": {
        "Description": "Reduces the effect of enemy applied healing reduction.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "TechPower": "12",
        "LifestealPercentHero": "35",
        "BulletLifestealPercent": "35",
        "BaseAttackDamagePercent": "15",
        "BonusHealth": "175"
      },
      "Inhibitor": {
        "Description": "Your bullets apply Movement Slow and reduce the target's outgoing damage on hit.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": "0",
        "BonusHealth": "175",
        "BaseAttackDamagePercent": "25",
        "Conditionals": {
          "SlowPercent": "25",
          "DebuffDuration": "2.5",
          "OutgoingDamagePenaltyPercent": "-35"
        }
      },
      "Phantom_Strike": {
        "Description": "Teleport to an enemy target, applying Disarm, Slow, and dealing damage.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "ActivationPress",
        "Slot": "vitality",
        "Cooldown": 26,
        "CastRange": "25m",
        "BulletResist": "15",
        "BaseAttackDamagePercent": "30",
        "Conditionals": {
          "SlowPercent": "50",
          "SlowDuration": "3",
          "ImpactDamage": "75"
        }
      },
      "Soul_Rebirth": {
        "Description": null,
        "Cost": "6200",
        "Tier": "4",
        "Activation": "Passive",
        "Slot": "vitality",
        "Cooldown": 212,
        "TechPower": "12",
        "RespawnDelay": "4",
        "Conditionals": { "RespawnHealthPercent": "50" },
        "CooldownReduction": "15"
      },
      "Unstoppable": {
        "Description": "Suppress negative status effects and become Immune to Stun, Silence, Sleep, Root, and Disarm.",
        "Cost": "6200",
        "Tier": "4",
        "Activation": "InstantCast",
        "Slot": "vitality",
        "Cooldown": 64,
        "Duration": "6",
        "CastRange": "0",
        "BonusHealth": "150",
        "TechResist": "15",
        "BonusMoveSpeed": "1m",
        "SpiritPower": "12"
      }
    }
  }
}
