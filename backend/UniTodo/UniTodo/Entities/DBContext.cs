using Microsoft.EntityFrameworkCore;

namespace UniTodo.Entities
{
	public partial class DBContext: DbContext
    {
        public DBContext()
        {
        }

        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TodoEntity> TodoEntity { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoEntity>(entity =>
            {
                entity.ToTable("todoentity");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.UpdatedAt)
                    .IsRequired()
                    .HasMaxLength(45);

                entity.Property(e => e.DeletedAt)
                    .HasMaxLength(45);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

