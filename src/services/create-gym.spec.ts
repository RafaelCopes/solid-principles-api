import { expect, describe, it, beforeEach } from 'vitest';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { CreateGymService } from './create-gym';

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymService;

describe('Register', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymService(gymsRepository);
  });

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Javascript Gym',
      description: null,
      phone: null,
      latitude: -30.9205258,
      longitude: -51.7970005,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
