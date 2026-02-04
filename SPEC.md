engine:
  name: Endurance Classification & Training Engine
  version: 1.0
  objective:
    primary: Break a world record (road/track middle–long distance)
    secondary: Produce distance-agnostic endurance dominance

athlete_profile:
  background:
    former_team_sport: football
    endurance_bias: very_high
    known_traits:
      - high aerobic work capacity
      - historically underdeveloped anaerobic/lactate tolerance
      - durability over speed
  data_inputs:
    - age
    - body_mass
    - height
    - training_age
    - injury_history

training_phases:
  - phase_id: P1
    name: Aerobic Supremacy Block
    duration_months: 6
    goal: Marathon-level aerobic base
    modalities:
      running:
        volume_priority: high
        intensity_distribution:
          easy: 70
          threshold: 20
          high_intensity: 10
      cross_training:
        elliptical:
          purpose: VO2max / anaerobic stimulus
          frequency_per_week: 2
      strength_conditioning:
        kettlebell:
          purpose: lactate tolerance
          frequency_per_week: 2
        circuits:
          purpose: muscular endurance
    constraints:
      - heart_rate_controlled
      - fatigue_monitored
      - no specialization

  - phase_id: P2
    name: Distance Expression Block
    duration_months: adaptive
    unlocked_after: P1
    goal: Express aerobic base across distances
    distances_supported:
      - 1500
      - 3000
      - 5000
      - 10000
      - half_marathon
      - marathon

classification_system:
  scale:
    min: 1
    max: 100
  tiers:
    - name: National
      level_range: [1, 40]
      benchmark_reference: Gibraltar
    - name: Continental
      level_range: [41, 75]
      benchmark_reference: Europe
    - name: World Class
      level_range: [76, 100]
      benchmark_reference: World Records

record_database:
  references:
    - distance: 3000m
      type: track
    - distance: 5000m
      type: track
    - distance: 10000m
      type: track
    - distance: half_marathon
      type: road
    - distance: marathon
      type: road
    - distance: ultra
      type: road

assessment_protocol:
  test_types:
    races:
      selected_by:
        - Charlie
        - John
      metrics:
        - finish_time
        - split_consistency
        - pace_decay
    physiological:
      metrics:
        - average_hr
        - hr_drift
        - recovery_hr_60s
        - recovery_hr_180s
    training_reports:
      metrics:
        - volume_tolerance
        - session_completion_rate
        - fatigue_response

scoring_engine:
  current_class_score:
    inputs:
      - race_results
      - hr_efficiency
      - fatigue_resilience
    output: current_level
  potential_class_score:
    inputs:
      - training_trends
      - recovery_quality
      - response_to_load
    output: projected_level

progression_logic:
  rules:
    - no_level_jump_without_test
    - regression_allowed_if_adaptation_fails
    - specialization_locked_until_aerobic_threshold_met

success_criteria:
  intermediate:
    - stable marathon aerobic metrics
    - HM pace within elite continental band
  final:
    - world_record_attempt_triggered
    - performance within 1% of WR reference
